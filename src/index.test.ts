import 'mocha';
import { assert } from 'chai';
import { generate, parse } from './';

describe('SortKey', () => {
  describe('.generate', () => {
    it('basic use-case', () => {
      assert.equal(generate('aaa'), 'aaa');
      assert.equal(generate('aaa', 'bbb'), 'aaa#bbb');
      assert.equal(generate(), '');
      assert.equal(generate('abc#abc', 'efg'), 'abc\\#abc#efg');
      assert.equal(generate('abc\\abc', 'efg'), 'abc\\\\abc#efg');
      assert.equal(generate('abc\\#abc', 'efg'), 'abc\\\\\\#abc#efg');
    });

    it('iso date string', () => {
      const str = new Date().toISOString();

      assert.equal(generate(str), str);
    });
  });

  describe('.parse', () => {
    it('basic use-case', () => {
      assert.deepEqual(parse('aaa'), ['aaa']);
      assert.deepEqual(parse('aaa#bbb'), ['aaa', 'bbb']);
      assert.deepEqual(parse(''), ['']);
      assert.deepEqual(parse('#'), ['', '']);
      assert.deepEqual(parse('##'), ['', '', '']);
      assert.deepEqual(parse('\\##'), ['#', '']);
      assert.deepEqual(parse('#\\#'), ['', '#']);
      assert.deepEqual(parse('abc\\#abc#efg'), ['abc#abc', 'efg']);
      assert.deepEqual(parse('abc\\\\abc#efg'), ['abc\\abc', 'efg']);
      assert.deepEqual(parse('abc\\\\\\#abc#efg'), ['abc\\#abc', 'efg']);
    });
  });

  describe('parts -> key -> parts', () => {
    const partsList = [
      [''],
      ['', ''],
      ['', '', ''],
      ['aaa'],
      ['#'],
      ['##'],
      ['###'],
      ['#', '#'],
      ['\\'],
      ['a', '#'],
      ['#', 'a'],
      ['#', 'a', '#'],
      ['aaa', 'bbb'],
      ['aaa', 'bbb', 'cccc'],
      ['abc#abc', 'efg'],
      ['abc\\abc', 'efg'],
      ['abc\\#abc', 'efg'],
    ];

    for (const parts of partsList) {
      it(parts.join(JSON.stringify(parts)), () => {
        assert.deepEqual(parse(generate(...parts)), parts);
      });
    }
  });
});
