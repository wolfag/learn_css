const SECONDS_PER_HOUR = 3600;
const SECONDS_PER_MIN = 60;

function getRank(markList) {
  if (!Array.isArray(markList)) return [];
  if (markList.length === 0) return [];
  if (markList.length === 1) return [1];

  markList.sort((a, b) => b - a);

  let level = 1;
  const result = [level];
  for (let i = 1; i < markList.length; i++) {
    level++;
    if (markList[i] === markList[i - 1]) {
      result.push(result[i - 1]);
    } else {
      result.push(level);
    }
  }

  return result;
}

describe('getRank()', function () {
  it('should return "[]" when markList is undefined', function () {
    expect(getRank().toString()).toBe('');
  });

  it('should return "[]" when markList is null', function () {
    expect(getRank(null).toString()).toBe('');
  });

  it('should return "[]" when markList is empty', function () {
    expect(getRank([]).toString()).toBe('');
  });

  it('should return "[1]" when markList has only one item', function () {
    expect(getRank([3]).toString()).toBe('1');
  });

  it('should return "[1,2]" when markList is [3,4]', function () {
    expect(getRank([3, 4]).toString()).toBe('1,2');
  });

  it('should return "[1,2,3]" when markList is [5,3,4]', function () {
    expect(getRank([5, 3, 4]).toString()).toBe('1,2,3');
  });

  it('should return "[1,2,2]" when markList is [3,4,3]', function () {
    expect(getRank([3, 4, 3]).toString()).toBe('1,2,2');
  });

  it('should return "[1,2,2,4]" when markList is [3,4,3,2]', function () {
    expect(getRank([3, 4, 3, 2]).toString()).toBe('1,2,2,4');
  });

  it('should return "[1,1,3,4]" when markList is [8,3,6,8]', function () {
    expect(getRank([8, 3, 6, 8]).toString()).toBe('1,1,3,4');
  });

  it('should return "[1,1,3,4,5,6,6,8]" when markList is [4,3,7,2,8,3,6,8]', function () {
    expect(getRank([4, 3, 7, 2, 8, 3, 6, 8]).toString()).toBe(
      '1,1,3,4,5,6,6,8',
    );
  });
});
