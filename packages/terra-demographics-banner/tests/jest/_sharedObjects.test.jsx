import DemographicsBannerUtils from '../../src/_sharedObjects';

describe('personDetails', () => {
  let props;

  beforeEach(() => {
    props = {
      age: '25',
      gender: 'Male',
      dateOfBirth: 'May 9, 1993',
      dateOfBirthLabel: 'DOB',
      dateOfBirthFullText: 'Date of Birth',
    };
  });

  it('creates elements with minimum props', () => {
    const elements = DemographicsBannerUtils.personDetails(props);

    expect(elements.length).toBe(3);
    expect(elements).toMatchSnapshot();
  });

  it('creates elements with gestational age', () => {
    props.gestationalAge = '2';
    props.gestationalAgeLabel = 'GA';
    props.gestationalAgeFullText = 'Gestational Age';
    const elements = DemographicsBannerUtils.personDetails(props);

    expect(elements.length).toBe(4);
    expect(elements).toMatchSnapshot();
  });

  it('creates elements with post menstrual age', () => {
    props.postMenstrualAge = '3';
    props.postMenstrualAgeLabel = 'PMA';
    props.postMenstrualAgeFullText = 'Post Menstrual Age';
    const elements = DemographicsBannerUtils.personDetails(props);

    expect(elements.length).toBe(4);
    expect(elements).toMatchSnapshot();
  });

  it('creates elements with deceased', () => {
    props.deceasedDate = 'March 12, 2017';
    props.deceasedDateLabel = 'Deceased';
    const elements = DemographicsBannerUtils.personDetails(props);

    expect(elements.length).toBe(4);
    expect(elements).toMatchSnapshot();
  });

  it('creates elements with all provided props', () => {
    props.gestationalAge = '2';
    props.gestationalAgeLabel = 'GA';
    props.gestationalAgeFullText = 'Gestational Age';
    props.postMenstrualAge = '3';
    props.postMenstrualAgeLabel = 'PMA';
    props.postMenstrualAgeFullText = 'Post Menstrual Age';
    props.deceasedDate = 'March 12, 2017';
    props.deceasedDateLabel = 'Deceased';
    const elements = DemographicsBannerUtils.personDetails(props);

    expect(elements.length).toBe(6);
    expect(elements).toMatchSnapshot();
  });
});

describe('applicationIdentifiers', () => {
  let props;

  beforeEach(() => {
    props = {
      identifiers: { MRN: 12343, REA: '3JSDA' },
    };
  });

  it('creates elements for each identifier when only identifiers provided', () => {
    const elements = DemographicsBannerUtils.applicationIdentifiers(props);

    expect(elements.length).toBe(2);
    expect(elements).toMatchSnapshot();
  });

  it('creates elements for each identifier when identifiers and valid identifiersTitles provided', () => {
    props.identifiersLongForm = { MRN: 'Medical Record Number', REA: 'RRREEEAAA' };
    const elements = DemographicsBannerUtils.applicationIdentifiers(props);

    expect(elements.length).toBe(2);
    expect(elements[0].props.abbrTitle).toEqual('Medical Record Number');
    expect(elements[1].props.abbrTitle).toEqual('RRREEEAAA');
    expect(elements).toMatchSnapshot();
  });

  it('creates elements for each identifier when identifiers and invalid identifiersTitles provided', () => {
    props.identifiersLongForm = { FIN: 'Financial Number', REA: 'RRREEEAAA' };
    const elements = DemographicsBannerUtils.applicationIdentifiers(props);

    expect(elements.length).toBe(2);
    expect(elements[0].props.abbrTitle).toEqual(undefined);
    expect(elements[1].props.abbrTitle).toEqual('RRREEEAAA');
    expect(elements).toMatchSnapshot();
  });

  it('returns null when no identifiers provided', () => {
    props.identifiers = undefined;
    const elements = DemographicsBannerUtils.applicationIdentifiers(props);

    expect(elements).toBeNull();
  });
});
