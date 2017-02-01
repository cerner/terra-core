import specReporter from 'jasmine-spec-reporter';

jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(new specReporter.SpecReporter());
