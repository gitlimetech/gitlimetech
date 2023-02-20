import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from '../Footer';
import Notification from '../Notification';
import useStyles from './term-style';
import { withTranslation } from '~/i18n';

const termsList = [
	{
		terms: '1.Use of the Site',
		terms_details:
			'The Site and its contents, including but not limited to text, images, and software, are the property of Gitlime and are protected by copyright and other intellectual property laws. You may not use the Site or its contents for any commercial purpose without the express written consent of Gitlime.',
	},
	{
		terms: '2.Services',
		terms_details:
			'Gitlime provides website development and web application development services to its clients. By using the Site or any services provided on the Site, you agree to be bound by the terms and conditions of any agreement between you and Gitlime regarding the use of such services.',
	},
	{
		terms: '3.Disclaimer',
		terms_details:
			'The Site and its contents are provided on an as is basis. Gitlime makes no representations or warranties of any kind, express or implied, as to the operation of the Site or the information, content, materials, or products included on the Site.',
	},
	{
		terms: '4.Limitation of Liability',
		terms_details:
			'Gitlime shall not be liable for any damages of any kind arising from the use of the Site or any services provided on the Site, including but not limited to direct, indirect, incidental, punitive, and consequential damages.',
	},
	{
		terms: '5.Indemnification',
		terms_details:
			'You agree to indemnify and hold Gitlime, its officers, directors, employees, agents, and assigns harmless from any claims, damages, and expenses, including reasonable attorneys fees, arising from your use of the Site or any services provided on the Site.',
	},
	{
		terms: '6.Governing Law',
		terms_details:
			'These Terms shall be governed by and construed in accordance with the laws of the State of [STATE], without giving effect to any principles of conflicts of law.',
	},
	{
		terms: '7.Changes to the Terms',
		terms_details:
			'Gitlime reserves the right to make changes to the Terms at any time. Your continued use of the Site following the posting of changes to the Terms will indicate your acceptance of those changes',
	},
	{
		terms: '8.Contact Us',
		terms_details:
			'If you have any questions about these Terms, please contact us at: Email: hello@gitlime.com ',
	},
];

function TermUse(props) {
	const classes = useStyles();
	const { t } = props;
	return (
		<React.Fragment>
			<CssBaseline />
			<div className={classes.mainWrap}>
				<main className={classes.containerWrap}>
					<section className={classes.titleWrap}>
						<Typography variant="h4" align="center" gutterBottom>
							{t('common:agency-landing.terms_conditions_title')}
						</Typography>
					</section>
					<section className={classes.contentWrap}>
						<Typography variant="h4" gutterBottom>
							{t('common:agency-landing.terms_conditions_greet')}
						</Typography>
						<Typography variant="h6" gutterBottom>
							{t('common:agency-landing.terms_conditions_para')}
						</Typography>
						{termsList.map((item, index) => (
							<div className={classes.item} key={index.toString()}>
								<Typography variant="h5" gutterBottom>
									{item.terms}
								</Typography>
								<Typography variant="h6" gutterBottom>
									{item.terms_details}
								</Typography>
								<br />
							</div>
						))}
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

TermUse.propTypes = {
	t: PropTypes.func.isRequired,
};

export default withTranslation(['common', 'agency-landing'])(TermUse);
