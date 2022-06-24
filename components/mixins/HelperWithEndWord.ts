export class HelperWithEndWord{
  public _countElements;

  constructor({countElements}: { countElements: number }) {
    this._countElements = countElements;
  }


  public static endWord = (_countElements : number) => {
    if (
      _countElements % 10
      && _countElements !== 11
      && _countElements !== 12
      && _countElements !== 13
      && _countElements !== 14
    ) {
      _countElements = _countElements % 10
      if (_countElements === 1) {
        return 'a'
      }
      if (
        _countElements === 2 || _countElements === 3 || _countElements === 4
      ) {
        return 'ы'
      }
      else return ''
    }
    else return ''
  }
}
