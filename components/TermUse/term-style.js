import { makeStyles } from '@material-ui/core/styles';

const sectionMargin = (margin) => margin * 20;
const termStyles = makeStyles((theme) => ({
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
		padding: theme.spacing(0),
		[theme.breakpoints.down('sm')]: {
			marginTop: theme.spacing(12),
			marginBottom: theme.spacing(6),
		},
	},
	titleWrap: {
		position: 'relative',
		height: 300,
		paddingBottom: theme.spacing(0),
		background:
			theme.palette.type === 'dark'
				? theme.palette.secondary.light
				: theme.palette.primary.dark,
		clipPath: 'polygon(0 0, 100% 0, 100% 58%, 48% 100%, 0 58%)',
		[theme.breakpoints.down('sm')]: {
			height: 100,
		},
		'& h4': {
			fontSize: 50,
			color:
				theme.palette.type === 'dark'
					? theme.palette.primary.dark
					: theme.palette.secondary.light,
			marginTop: theme.spacing(6),
			paddingTop: theme.spacing(10),
			textAlign: 'cenetr',
			fontWeight: '900',
			[theme.breakpoints.down('sm')]: {
				fontSize: 20,
				marginTop: theme.spacing(2),
				paddingTop: theme.spacing(3),
				// paddingBottom: theme.spacing(6),
			},
		},
	},
	contentWrap: {
		// boxShadow: '14px 14px 70px -20px rgb(17 9 61 / 15%)',
		margin: theme.spacing(9, 16),
		padding: theme.spacing(8),
		borderRadius: '12px',
		// position: 'absolute',
		[theme.breakpoints.down('sm')]: {
			margin: theme.spacing(2),
			padding: theme.spacing(3),
		},
		'& h4': {
			fontSize: 25,
			fontWeight: '700',
			[theme.breakpoints.down('sm')]: {
				fontSize: 22,
			},
		},
		'& h5': {
			fontSize: 20,
			fontWeight: '700',
			[theme.breakpoints.down('sm')]: {
				fontSize: 18,
			},
		},
		'& h6': {
			fontSize: 16,
			[theme.breakpoints.down('sm')]: {
				fontSize: 15,
			},
		},
	},
}));
export default termStyles;
