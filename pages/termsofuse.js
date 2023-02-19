import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, alpha } from '@material-ui/core/styles/colorManipulator';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TermUse from '../components/TermUse/TermUse';
import Notification from '../components/Notification';
import brand from '~/public/text/brand';
import { withTranslation } from '../i18n';

function TermsOfUse(props) {
	const { onToggleDark, onToggleDir, t, invert } = props;
	console.log(onToggleDark, onToggleDir, t, invert);
	return (
		<Fragment>
			<Head>
				<title>
					{brand.agency.name}
					&nbsp; - Terms of Uses
				</title>
			</Head>
			<Header
				onToggleDark={onToggleDark}
				onToggleDir={onToggleDir}
				invert={invert}
			/>
			<TermUse
				toggleDark={onToggleDark}
				toggleDir={onToggleDir}
				invert={invert}
			/>
		</Fragment>
	);
}
TermsOfUse.propTypes = {
	onToggleDark: PropTypes.func.isRequired,
	onToggleDir: PropTypes.func.isRequired,
	invert: PropTypes.bool,
	t: PropTypes.func.isRequired,
};
TermsOfUse.getInitialProps = async () => ({
	namespacesRequired: ['common', 'agency-landing'],
});
TermsOfUse.defaultProps = {
	invert: false,
};

export default withTranslation(['common', 'agency-landing'])(TermsOfUse);
