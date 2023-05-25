import { Morphel } from '../src';

describe('index', () => {
  let container: Element;

  beforeEach(() => {
    container = document.createElement('div');
    container.innerHTML = '<p class="foo">bar</p>';
  });

  it('sets the original html', () => {
    const morphel = new Morphel(container.querySelector('.foo')!);

    expect(morphel.originalHTML).toStrictEqual('<p class="foo">bar</p>');
  });

  it('morphs element to new markup', () => {
    const morphel = new Morphel(container.querySelector('.foo')!);

    morphel.morph(`<p class="foo">baz</p>`);

    expect(container.querySelector('.foo')?.innerHTML).toStrictEqual('baz');
  });

  it('restores element to original markup', () => {
    const morphel = new Morphel(container.querySelector('.foo')!);

    morphel.morph(`<p class="foo">baz</p>`);
    morphel.morph(`<p class="foo">fuzz</p>`);
    morphel.restore();

    expect(container.querySelector('.foo')?.innerHTML).toStrictEqual('bar');
  });
});
