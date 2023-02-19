import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: theme.spacing(20),
		position: 'relative',
		[theme.breakpoints.down('sm')]: {
			marginTop: theme.spacing(0),
		},
	},
	background: {
		fill:
			theme.palette.type === 'dark'
				? theme.palette.secondary.light
				: theme.palette.primary.dark,
		width: 560,
		height: 560,
		top: theme.spacing(-50),
		left: '20%',
		position: 'absolute',
		transform: 'scale(3)',
	},
	button: {
		[theme.breakpoints.up('md')]: {
			width: 240,
			height: 64,
			fontSize: 18,
		},
		[theme.breakpoints.down('sm')]: {
			margin: '0 auto',
		},
	},
	paper: {
		padding: theme.spacing(4),
		border: `2px solid ${theme.palette.secondary.main}`,
		[theme.breakpoints.down('sm')]: {
			textAlign: 'center',
		},
		[theme.breakpoints.down('md')]: {
			textAlign: 'center',
		},
		[theme.breakpoints.up('lg')]: {
			padding: theme.spacing(4, 10),
			margin: theme.spacing(0, 4),
		},
		[theme.breakpoints.down('sm')]: {
			marginBottom: theme.spacing(5),
		},
		[theme.breakpoints.down('xs')]: {
			padding: theme.spacing(4, 1),
			textAlign: 'center',
		},
		'& h4': {
			fontWeight: theme.typography.fontWeightBold,
			color:
				theme.palette.type === 'dark'
					? theme.palette.secondary.light
					: theme.palette.secondary.dark,
			fontFamily: 'Roboto Condensed',
			[theme.breakpoints.down('xs')]: {
				fontSize: 28,
				marginBottom: theme.spacing(2),
			},
		},
		'& p': {
			fontSize: 24,
			[theme.breakpoints.down('sm')]: {
				marginBottom: theme.spacing(5),
			},
			[theme.breakpoints.down('xs')]: {
				fontSize: 18,
				marginBottom: theme.spacing(3),
			},
		},
	},
	btnContainer: {
		margin: theme.spacing(2, 0),
	},
	rightIcon: {
		marginLeft: theme.spacing(),
		transform: theme.direction === 'rtl' ? 'rotate(180deg)' : 'none',
	},
}));

export default useStyles;
