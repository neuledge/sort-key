import 'mocha';
import { assert } from 'chai';
import SortKey from './';

describe('SortKey', () => {
  describe('README', () => {
    it('Usage', () => {
      const SK = SortKey.generate('[order]', '[item]');
      assert.equal(SK, '[order]#[item]');

      const [order, item] = SortKey.parse(SK);

      assert.equal(order, '[order]');
      assert.equal(item, '[item]');
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
