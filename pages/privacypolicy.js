import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Notification from '../components/Notification';
import brand from '~/public/text/brand';
import { withTranslation } from '../i18n';

const sectionMargin = (margin) => margin * 20;
const useStyles = makeStyles((theme) => ({
	mainWrap: {
		position: 'relative',
		width: '100%',
		overflow: 'hidden',
		background: theme.palette.background.paper,
	},
	spaceBottom: {
		marginBottom: sectionMargin(theme.spacing()),
	},
	spaceTop: {
		paddingTop: sectionMargin(theme.spacing()),
	},
	containerWrap: {
		marginTop: theme.spacing(10),
		padding: theme.spacing(4),
		'& > section': {
			position: 'relative',
		},
	},
}));

function PrivacyPolicy(props) {
	const classes = useStyles();
	const { onToggleDark, onToggleDir, t, invert } = props;
	return (
		<React.Fragment>
			<Head>
				<title>
					{brand.agency.name}
					&nbsp; - Privacy Policy
				</title>
			</Head>
			<CssBaseline />
			<div className={classes.mainWrap}>
				<Header
					onToggleDark={onToggleDark}
					onToggleDir={onToggleDir}
					invert={invert}
				/>
				<main className={classes.containerWrap}>
					<section className={clsx(classes.spaceTop, classes.spaceBottom)}>
						{/* <Typography variant="h2" align="center" gutterBottom>
							{t('common:title')}
						</Typography> */}
					</section>
					<section className={clsx(classes.spaceTop, classes.spaceBottom)}>
						<Typography variant="h4" align="center" gutterBottom>
							Privacy Policy
						</Typography>
					</section>
				</main>
				<section className={classes.spaceTop}>
					<Footer />
				</section>
				<Notification />
			</div>
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
