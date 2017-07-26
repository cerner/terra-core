import AppDelegate from '../../src/app-delegate/AppDelegate';

const disclose = () => {};
const dismiss = () => {};
const closeDisclosure = () => {};
const goBack = () => {};
const maximize = () => {};
const minimize = () => {};
const requestFocus = () => {};
const releaseFocus = () => {};
const notSupported = () => {};
const appDelegateInstance = AppDelegate.create({
  disclose, dismiss, closeDisclosure, goBack, maximize, minimize, requestFocus, releaseFocus,
});

describe('propType', () => {
  it('should provide a defined PropType', () => {
    expect(AppDelegate.propType).not.toBe(undefined);
  });
});

describe('create', () => {
  it('should expose a create function that creates an AppDelegate instance', () => {
    const appDelegateLocalInstance = AppDelegate.create({
      disclose, dismiss, closeDisclosure, goBack, maximize, minimize, requestFocus, releaseFocus, notSupported,
    });

    expect(appDelegateLocalInstance.disclose).toBe(disclose);
    expect(appDelegateLocalInstance.dismiss).toBe(dismiss);
    expect(appDelegateLocalInstance.closeDisclosure).toBe(closeDisclosure);
    expect(appDelegateLocalInstance.goBack).toBe(goBack);
    expect(appDelegateLocalInstance.maximize).toBe(maximize);
    expect(appDelegateLocalInstance.minimize).toBe(minimize);
    expect(appDelegateLocalInstance.requestFocus).toBe(requestFocus);
    expect(appDelegateLocalInstance.releaseFocus).toBe(releaseFocus);
    expect(appDelegateLocalInstance.thisIsATestWhatAmIDoing).toBe(undefined);
  });
});

describe('clone', () => {
  it('should override all possible functions if given', () => {
    const cloneDisclose = () => {};
    const cloneDismiss = () => {};
    const cloneCloseDisclosure = () => {};
    const cloneGoBack = () => {};
    const cloneMaximize = () => {};
    const cloneMinimize = () => {};
    const cloneRequestFocus = () => {};
    const cloneReleaseFocus = () => {};

    const clonedDelegate = AppDelegate.clone(appDelegateInstance, {
      disclose: cloneDisclose,
      dismiss: cloneDismiss,
      closeDisclosure: cloneCloseDisclosure,
      goBack: cloneGoBack,
      maximize: cloneMaximize,
      minimize: cloneMinimize,
      requestFocus: cloneRequestFocus,
      releaseFocus: cloneReleaseFocus,
    });

    expect(clonedDelegate.disclose).toBe(cloneDisclose);
    expect(clonedDelegate.dismiss).toBe(cloneDismiss);
    expect(clonedDelegate.closeDisclosure).toBe(cloneCloseDisclosure);
    expect(clonedDelegate.goBack).toBe(cloneGoBack);
    expect(clonedDelegate.maximize).toBe(cloneMaximize);
    expect(clonedDelegate.minimize).toBe(cloneMinimize);
    expect(clonedDelegate.requestFocus).toBe(cloneRequestFocus);
    expect(clonedDelegate.releaseFocus).toBe(cloneReleaseFocus);
  });

  it('should keep functions from original instance if not provided', () => {
    const cloneDisclose = () => {};
    const cloneDismiss = () => {};
    const clonedDelegate = AppDelegate.clone(appDelegateInstance, {
      disclose: cloneDisclose,
      dismiss: cloneDismiss,
    });

    expect(clonedDelegate.disclose).toBe(cloneDisclose);
    expect(clonedDelegate.dismiss).toBe(cloneDismiss);
    expect(clonedDelegate.closeDisclosure).toBe(closeDisclosure);
    expect(clonedDelegate.goBack).toBe(goBack);
    expect(clonedDelegate.maximize).toBe(maximize);
    expect(clonedDelegate.minimize).toBe(minimize);
    expect(clonedDelegate.requestFocus).toBe(requestFocus);
    expect(clonedDelegate.releaseFocus).toBe(releaseFocus);
  });
});

describe('isEqual', () => {
  it('should return true when all attributes are equal', () => {
    const appDelegateLocalInstance = AppDelegate.create({
      disclose, dismiss, closeDisclosure, goBack, maximize, minimize, requestFocus, releaseFocus,
    });

    expect(AppDelegate.isEqual(appDelegateInstance, appDelegateLocalInstance)).toBe(true);
  });

  it('should return true when refs are equal', () => {
    expect(AppDelegate.isEqual(appDelegateInstance, appDelegateInstance)).toBe(true);
  });

  it('should return false when disclose does not match', () => {
    const appDelegateLocalInstance = AppDelegate.create({
      disclose: () => {}, dismiss, closeDisclosure, goBack, maximize, minimize, requestFocus, releaseFocus,
    });

    expect(AppDelegate.isEqual(appDelegateInstance, appDelegateLocalInstance)).toBe(false);
  });

  it('should return false when dismiss does not match', () => {
    const appDelegateLocalInstance = AppDelegate.create({
      disclose, dismiss: () => {}, closeDisclosure, goBack, maximize, minimize, requestFocus, releaseFocus,
    });

    expect(AppDelegate.isEqual(appDelegateInstance, appDelegateLocalInstance)).toBe(false);
  });

  it('should return false when closeDisclosure does not match', () => {
    const appDelegateLocalInstance = AppDelegate.create({
      disclose, dismiss, closeDisclosure: () => {}, goBack, maximize, minimize, requestFocus, releaseFocus,
    });

    expect(AppDelegate.isEqual(appDelegateInstance, appDelegateLocalInstance)).toBe(false);
  });

  it('should return false when goBack does not match', () => {
    const appDelegateLocalInstance = AppDelegate.create({
      disclose, dismiss, closeDisclosure, goBack: () => {}, maximize, minimize, requestFocus, releaseFocus,
    });

    expect(AppDelegate.isEqual(appDelegateInstance, appDelegateLocalInstance)).toBe(false);
  });

  it('should return false when maximize does not match', () => {
    const appDelegateLocalInstance = AppDelegate.create({
      disclose, dismiss, closeDisclosure, goBack, maximize: () => {}, minimize, requestFocus, releaseFocus,
    });

    expect(AppDelegate.isEqual(appDelegateInstance, appDelegateLocalInstance)).toBe(false);
  });

  it('should return false when minimize does not match', () => {
    const appDelegateLocalInstance = AppDelegate.create({
      disclose, dismiss, closeDisclosure, goBack, maximize, minimize: () => {}, requestFocus, releaseFocus,
    });

    expect(AppDelegate.isEqual(appDelegateInstance, appDelegateLocalInstance)).toBe(false);
  });

  it('should return false when requestFocus does not match', () => {
    const appDelegateLocalInstance = AppDelegate.create({
      disclose, dismiss, closeDisclosure, goBack, maximize, minimize, requestFocus: () => {}, releaseFocus,
    });

    expect(AppDelegate.isEqual(appDelegateInstance, appDelegateLocalInstance)).toBe(false);
  });

  it('should return false when releaseFocus does not match', () => {
    const appDelegateLocalInstance = AppDelegate.create({
      disclose, dismiss, closeDisclosure, goBack, maximize, minimize, requestFocus, releaseFocus: () => {},
    });

    expect(AppDelegate.isEqual(appDelegateInstance, appDelegateLocalInstance)).toBe(false);
  });

  it('should return false when either parameter is undefined', () => {
    expect(AppDelegate.isEqual(AppDelegate.create({}), undefined)).toBe(false);
    expect(AppDelegate.isEqual(undefined, AppDelegate.create({}))).toBe(false);
  });
});

describe('registerComponentForDisclosure', () => {
  it('should expose registerComponentForDisclosure', () => {
    expect(AppDelegate.registerComponentForDisclosure).not.toBe(undefined);
  });
});

describe('getComponentForDisclosure', () => {
  it('should expose getComponentForDisclosure', () => {
    expect(AppDelegate.getComponentForDisclosure).not.toBe(undefined);
  });
});
