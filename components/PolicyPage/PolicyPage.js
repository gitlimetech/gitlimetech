import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from '../Footer';
import Notification from '../Notification';
import useStyles from './policy-style';
import { withTranslation } from '~/i18n';

function PrivacyPolicy(props) {
	const classes = useStyles();
	const { t } = props;
	return (
		<React.Fragment>
			<CssBaseline />
			<div className={classes.mainWrap}>
				<main className={classes.containerWrap}>
					<section className={classes.titleWrap}>
						<Typography variant="h4" align="center" gutterBottom>
							{t('common:privacy_policy_title')}
						</Typography>
					</section>
					<section className={classes.contentWrap}>
						<Typography variant="h4" gutterBottom>
							{t('common:privacy_policy_para')}
						</Typography>
					</section>
				</main>
				<section>
					<Footer />
				</section>
				<Notification />
			</div>
		</React.Fragment>
	);
}

PrivacyPolicy.propTypes = {
	t: PropTypes.func.isRequired,
};

export default withTranslation(['common', 'agency-landing'])(PrivacyPolicy);
