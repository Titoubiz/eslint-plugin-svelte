import { RuleTester } from '../../utils/eslint-compat';
import rule from '../../../src/rules/init-declarations';
import { loadTestCases } from '../../utils/utils';

const tester = new RuleTester({
	languageOptions: {
		ecmaVersion: 2020,
		sourceType: 'module'
	}
});

tester.run('init-declarations', rule as any, loadTestCases('init-declarations'));
