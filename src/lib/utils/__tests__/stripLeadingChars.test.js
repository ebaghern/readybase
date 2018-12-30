import stripLeadingChars from '../stripLeadingChars';
describe('Make sure the leading characters are separated in the right location.', () => {
  it('should the correct leading characters and the remaining potion of the string.', () => {
    expect(stripLeadingChars('__private--red', '__')).toMatchObject({
      leading: '__',
      string: 'private--red',
    });
    expect(stripLeadingChars('__private__heading', '__')).toMatchObject({
      leading: '__',
      string: 'private__heading',
    });
    expect(stripLeadingChars('__private__heading--red', '__')).toMatchObject({
      leading: '__',
      string: 'private__heading--red',
    });
    expect(stripLeadingChars('___test__ok ', '__')).toMatchObject({
      leading: '___',
      string: 'test__ok',
    });
    expect(stripLeadingChars('  ___test__ok', '__')).toMatchObject({
      leading: '___',
      string: 'test__ok',
    });
    expect(stripLeadingChars('test__ok', '__')).toMatchObject({
      leading: '',
      string: 'test__ok',
    });
    expect(stripLeadingChars('____test__ok', '_')).toMatchObject({
      leading: '____',
      string: 'test__ok',
    });
    expect(stripLeadingChars('--test-ok', '-')).toMatchObject({
      leading: '--',
      string: 'test-ok',
    });
    expect(stripLeadingChars('--__-test__ok', '-')).toMatchObject({
      leading: '--',
      string: '__-test__ok',
    });
    expect(stripLeadingChars('_-_-___--_WHY_WOULD_-YOU_DO_THIS', '_-')).toMatchObject({
      leading: '_-_-___--_',
      string: 'WHY_WOULD_-YOU_DO_THIS',
    });
  });
});
