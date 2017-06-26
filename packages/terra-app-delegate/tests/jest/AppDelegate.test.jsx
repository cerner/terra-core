import AppDelegate from '../../src/app-delegate/AppDelegate';

describe('propType', () => {
  it('should provide a defined PropType', () => {
    expect(AppDelegate.propType).not.toBe(undefined);
  });
});

describe('create', () => {
  it('should expose a create function that creates an AppDelegate instance', () => {
    const disclose = () => {};
    const dismiss = () => {};
    const closeDisclosure = () => {};
    const goBack = () => {};
    const maximize = () => {};
    const minimize = () => {};
    const notSupported = () => {};

    const appDelegateInstance = AppDelegate.create({
      disclose, dismiss, closeDisclosure, goBack, maximize, minimize, notSupported,
    });

    expect(appDelegateInstance.disclose).toBe(disclose);
    expect(appDelegateInstance.dismiss).toBe(dismiss);
    expect(appDelegateInstance.closeDisclosure).toBe(closeDisclosure);
    expect(appDelegateInstance.goBack).toBe(goBack);
    expect(appDelegateInstance.maximize).toBe(maximize);
    expect(appDelegateInstance.minimize).toBe(minimize);
    expect(appDelegateInstance.thisIsATestWhatAmIDoing).toBe(undefined);
  });
});

describe('clone', () => {
  it('should override all possible functions if given', () => {
    const disclose = () => {};
    const dismiss = () => {};
    const closeDisclosure = () => {};
    const goBack = () => {};
    const maximize = () => {};
    const minimize = () => {};

    const appDelegateInstance = AppDelegate.create({
      disclose, dismiss, closeDisclosure, goBack, maximize, minimize,
    });

    const cloneDisclose = () => {};
    const cloneDismiss = () => {};
    const cloneCloseDisclosure = () => {};
    const cloneGoBack = () => {};
    const cloneMaximize = () => {};
    const cloneMinimize = () => {};

    const clonedDelegate = AppDelegate.clone(appDelegateInstance, {
      disclose: cloneDisclose,
      dismiss: cloneDismiss,
      closeDisclosure: cloneCloseDisclosure,
      goBack: cloneGoBack,
      maximize: cloneMaximize,
      minimize: cloneMinimize,
    });

    expect(clonedDelegate.disclose).toBe(cloneDisclose);
    expect(clonedDelegate.dismiss).toBe(cloneDismiss);
    expect(clonedDelegate.closeDisclosure).toBe(cloneCloseDisclosure);
    expect(clonedDelegate.goBack).toBe(cloneGoBack);
    expect(clonedDelegate.maximize).toBe(cloneMaximize);
    expect(clonedDelegate.minimize).toBe(cloneMinimize);
  });

  it('should keep functions from original instance if not provided', () => {
    const disclose = () => {};
    const dismiss = () => {};
    const closeDisclosure = () => {};
    const goBack = () => {};
    const maximize = () => {};
    const minimize = () => {};

    const appDelegateInstance = AppDelegate.create({
      disclose, dismiss, closeDisclosure, goBack, maximize, minimize,
    });

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
  });
});

describe('isEqual', () => {
  it('should return true when all attributes are equal', () => {
    const disclose = () => {};
    const dismiss = () => {};
    const closeDisclosure = () => {};
    const goBack = () => {};
    const maximize = () => {};
    const minimize = () => {};

    const appDelegateInstance1 = AppDelegate.create({
      disclose, dismiss, closeDisclosure, goBack, maximize, minimize,
    });

    const appDelegateInstance2 = AppDelegate.create({
      disclose, dismiss, closeDisclosure, goBack, maximize, minimize,
    });

    expect(AppDelegate.isEqual(appDelegateInstance1, appDelegateInstance2)).toBe(true);
  });

  it('should return true when refs are equal', () => {
    const disclose = () => {};
    const dismiss = () => {};
    const closeDisclosure = () => {};
    const goBack = () => {};
    const maximize = () => {};
    const minimize = () => {};

    const appDelegateInstance1 = AppDelegate.create({
      disclose, dismiss, closeDisclosure, goBack, maximize, minimize,
    });

    expect(AppDelegate.isEqual(appDelegateInstance1, appDelegateInstance1)).toBe(true);
  });

  it('should return false when disclose does not match', () => {
    const disclose = () => {};
    const dismiss = () => {};
    const closeDisclosure = () => {};
    const goBack = () => {};
    const maximize = () => {};
    const minimize = () => {};

    const appDelegateInstance1 = AppDelegate.create({
      disclose, dismiss, closeDisclosure, goBack, maximize, minimize,
    });

    const appDelegateInstance2 = AppDelegate.create({
      disclose: () => {}, dismiss, closeDisclosure, goBack, maximize, minimize,
    });

    expect(AppDelegate.isEqual(appDelegateInstance1, appDelegateInstance2)).toBe(false);
  });

  it('should return false when dismiss does not match', () => {
    const disclose = () => {};
    const dismiss = () => {};
    const closeDisclosure = () => {};
    const goBack = () => {};
    const maximize = () => {};
    const minimize = () => {};

    const appDelegateInstance1 = AppDelegate.create({
      disclose, dismiss, closeDisclosure, goBack, maximize, minimize,
    });

    const appDelegateInstance2 = AppDelegate.create({
      disclose, dismiss: () => {}, closeDisclosure, goBack, maximize, minimize,
    });

    expect(AppDelegate.isEqual(appDelegateInstance1, appDelegateInstance2)).toBe(false);
  });

  it('should return false when closeDisclosure does not match', () => {
    const disclose = () => {};
    const dismiss = () => {};
    const closeDisclosure = () => {};
    const goBack = () => {};
    const maximize = () => {};
    const minimize = () => {};

    const appDelegateInstance1 = AppDelegate.create({
      disclose, dismiss, closeDisclosure, goBack, maximize, minimize,
    });

    const appDelegateInstance2 = AppDelegate.create({
      disclose, dismiss, closeDisclosure: () => {}, goBack, maximize, minimize,
    });

    expect(AppDelegate.isEqual(appDelegateInstance1, appDelegateInstance2)).toBe(false);
  });

  it('should return false when goBack does not match', () => {
    const disclose = () => {};
    const dismiss = () => {};
    const closeDisclosure = () => {};
    const goBack = () => {};
    const maximize = () => {};
    const minimize = () => {};

    const appDelegateInstance1 = AppDelegate.create({
      disclose, dismiss, closeDisclosure, goBack, maximize, minimize,
    });

    const appDelegateInstance2 = AppDelegate.create({
      disclose, dismiss, closeDisclosure, goBack: () => {}, maximize, minimize,
    });

    expect(AppDelegate.isEqual(appDelegateInstance1, appDelegateInstance2)).toBe(false);
  });

  it('should return false when maximize does not match', () => {
    const disclose = () => {};
    const dismiss = () => {};
    const closeDisclosure = () => {};
    const goBack = () => {};
    const maximize = () => {};
    const minimize = () => {};

    const appDelegateInstance1 = AppDelegate.create({
      disclose, dismiss, closeDisclosure, goBack, maximize, minimize,
    });

    const appDelegateInstance2 = AppDelegate.create({
      disclose, dismiss, closeDisclosure, goBack, maximize: () => {}, minimize,
    });

    expect(AppDelegate.isEqual(appDelegateInstance1, appDelegateInstance2)).toBe(false);
  });

  it('should return false when minimize does not match', () => {
    const disclose = () => {};
    const dismiss = () => {};
    const closeDisclosure = () => {};
    const goBack = () => {};
    const maximize = () => {};
    const minimize = () => {};

    const appDelegateInstance1 = AppDelegate.create({
      disclose, dismiss, closeDisclosure, goBack, maximize, minimize,
    });

    const appDelegateInstance2 = AppDelegate.create({
      disclose, dismiss, closeDisclosure, goBack, maximize, minimize: () => {},
    });

    expect(AppDelegate.isEqual(appDelegateInstance1, appDelegateInstance2)).toBe(false);
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
