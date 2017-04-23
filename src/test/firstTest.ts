import test from 'ava';
import FeedParser from 'feedparser';
import {assert} from 'chai';
import {Request} from 'request';
import fs from 'fs';

const feed = './src/test/ponyFooFeed.xml';

let articlesCounter = 0;
const expectedArticles = [
'Regular Expressions in a post-ES6 world',
'Mixing Generators Into Iterators',
'Observables Proposal for ECMAScript!',
'Variables declared using const are not immutable',
'Content-Security-Policy in Express apps',
'Setting up an Angular 2 Development Environment [SPONSORED]',
'The JavaScript Standard',
'Let’s use const! Here’s why.',
'How Terrible Code Gets Written by Perfectly Sane People',
'Fourth Year in Review'
]

let actualArticles = [];

test.cb.beforeEach(t => {
fs.createReadStream(feed)
  .pipe(new FeedParser())
  .on('readable', function() {
    var stream = this, item;
    while (item = stream.read()) {
      articlesCounter++;
      actualArticles.push(item.title || item.description);
      if (articlesCounter === 10){
      	t.end();
      }
    }
  });
});

test('feed parser test', t => {
	t.is(expectedArticles.length,actualArticles.length);
	for (var i = 0; i <= actualArticles.length; i++) {
		t.is(expectedArticles[i],actualArticles[i]);
	}
});