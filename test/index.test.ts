import morphel from '../src';

describe('index', () => {
  let container: Element;

  beforeEach(() => {
    container = document.createElement('div');
    container.innerHTML = '<p class="foo">bar</p>';
  });

  it('morphs element to new markup', () => {
    morphel(container.querySelector('.foo')!, `<p class="foo">baz</p>`);

    expect(container.querySelector('.foo')?.innerHTML).toStrictEqual('baz');
  });
});
