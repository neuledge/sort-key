import 'mocha';
import { assert } from 'chai';
import SortKey from './';

describe('SortKey', () => {
  describe('README', () => {
    it('Usage', () => {
      const SK = SortKey.generate('1532208', '2020-09-11T15:30:06.822Z');
      assert.equal(SK, '1532208#2020-09-11T15:30:06.822Z');

      const [order, item] = SortKey.parse(SK);

      assert.equal(order, '1532208');
      assert.equal(item, '2020-09-11T15:30:06.822Z');
    });

    it('Supports escaping as well', () => {
      const SK = SortKey.generate('top', 'https://example.com/foo/bar#top');
      assert.equal(SK, 'top#https://example.com/foo/bar\\#top');

      const [anchor, url] = SortKey.parse(SK);

      assert.equal(anchor, 'top');
      assert.equal(url, 'https://example.com/foo/bar#top');
    });
  });
});
