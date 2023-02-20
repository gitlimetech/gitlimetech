import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import PolicyPage from '../components/PolicyPage/PolicyPage';
import Header from '../components/Header';
import brand from '~/public/text/brand';
import { withTranslation } from '../i18n';

function PrivacyPolicy(props) {
	const { onToggleDark, onToggleDir, t, invert } = props;
	console.log(onToggleDark, onToggleDir, t, invert);
	return (
		<React.Fragment>
			<Head>
				<title>
					{brand.agency.name}
					&nbsp; - Privacy Policy
				</title>
			</Head>
			<Header
				onToggleDark={onToggleDark}
				onToggleDir={onToggleDir}
				invert={invert}
			/>
			<PolicyPage
				toggleDark={onToggleDark}
				toggleDir={onToggleDir}
				invert={invert}
			/>
		</React.Fragment>
	);
}

PrivacyPolicy.propTypes = {
	onToggleDark: PropTypes.func.isRequired,
	onToggleDir: PropTypes.func.isRequired,
	invert: PropTypes.bool,
	t: PropTypes.func.isRequired,
};
PrivacyPolicy.defaultProps = {
	invert: false,
};

PrivacyPolicy.getInitialProps = async () => ({
	namespacesRequired: ['common', 'agency-landing'],
});

export default withTranslation(['common', 'agency-landing'])(PrivacyPolicy);
