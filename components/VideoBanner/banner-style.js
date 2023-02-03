import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {},
	decoTop: {},
	decoBottom: {},
	item: {
		direction: 'column-reverse',
		[theme.breakpoints.down('md')]: {
			direction: 'column',
			margin: '20px auto',
		},
	},
	heroContent: {
		marginTop: theme.spacing(12),
		marginBottom: 0,
		position: 'relative',

		'& > div': {
			paddingLeft: 0,
			paddingRight: 0,
		},
		'& h2': {
			fontSize: 45,
			textTransform: 'uppercase',
			fontWeight: theme.typography.fontWeightBold,
			[theme.breakpoints.down('sm')]: {
				fontSize: 32,
				textAlign: 'center',
			},
			'& span.highlight': {
				fontSize: 65,
				color: theme.palette.primary.main,
				display: 'block',
				lineHeight: '72px',
				[theme.breakpoints.down('sm')]: {
					fontSize: 50,
					textAlign: 'center',
				},
			},
		},
		'& h4': {
			fontSize: 25,
			[theme.breakpoints.down('sm')]: {
				fontSize: 20,
				textAlign: 'justify',
			},
		},
		[theme.breakpoints.up('lg')]: {
			// paddingLeft: theme.spacing(6),
			marginBottom: 0,
		},
		[theme.breakpoints.down('sm')]: {
			marginBottom: 0,
			paddingLeft: theme.spacing(0),
			paddingBottom: theme.spacing(0),
			marginTop: theme.spacing(10),
		},
	},
	heroSlider: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '70vh',
		[theme.breakpoints.down('sm')]: {
			marginTop: theme.spacing(16),
			flexWrap: 'wrap-reverse',
		},
	},
	slider: {
		width: '100%',
		paddingLeft: theme.spacing(4),
		[theme.breakpoints.down('md')]: {
			paddingLeft: theme.spacing(5),
		},
		[theme.breakpoints.down('sm')]: {
			padding: theme.spacing(3),
		},
	},
	// bannerText: {
	//   position: 'relative',
	//   zIndex: 10,
	//   color: theme.palette.text.primary,
	//   padding: theme.spacing(4, 0),
	//   border: '1px solid red',
	//   [theme.breakpoints.down('md')]: {
	//     padding: theme.spacing(4),
	//   },
	//   [theme.breakpoints.down('sm')]: {
	//     padding: theme.spacing(4),
	//     maxWidth: 640,
	//     margin: '0 auto',
	//     textAlign: 'center',
	//     color: theme.palette.common.white,
	//   }
	// },
	title: {
		marginTop: theme.spacing(10),
		marginBottom: theme.spacing(3),
		[theme.breakpoints.down('md')]: {
			marginTop: theme.spacing(15),
		},
	},
	textHelper: {
		display: 'inline-block',
		[theme.breakpoints.up('lg')]: {
			paddingRight: theme.spacing(10),
		},
	},
	secondRow: {
		display: 'flex',
		alignItems: 'center',
	},
	subtitle: {
		marginTop: theme.spacing(5),
		[theme.breakpoints.up('lg')]: {
			paddingRight: theme.spacing(8),
		},
		[theme.breakpoints.down('md')]: {
			marginBottom: theme.spacing(5),
		},
		[theme.breakpoints.up('sm')]: {
			textAlign: 'justify',
		},
	},
	sliderImg: {
		margin: '0px auto',
		'& img': {
			width: '100%',
			height: '100%',
		},
	},
	button: {
		minWidth: 200,
		height: 48,
		marginTop: theme.spacing(5),
		[theme.breakpoints.down('sm')]: {
			marginTop: theme.spacing(0),
			color: theme.palette.secondary.dark,
			borderColor: theme.palette.secondary.dark,
		},
	},
	icon: {
		marginLeft: theme.spacing(),
		transform: theme.direction === 'rtl' ? 'transform: rotate(180deg)' : 'none',
	},
	mobileCover: {
		position: 'absolute',
		top: 0,
		left: 0,
		margin: 0,
		height: '100%',
		background: theme.palette.common.black,
		'& img': {
			minWidth: '100%',
			height: '100%',
			opacity: 0.5,
		},
	},
	videoWrap: {
		position: 'relative',
	},
	videoFigure: {
		borderRadius: 80,
		background: theme.palette.primary.main,
		overflow: 'hidden',
		position: 'absolute',
		width: 1040,
		height: 840,
		top: 0,
		left: 0,
		boxShadow: `-30px 20px 0px 0px ${theme.palette.primary.main}`,
		[theme.breakpoints.up('sm')]: {
			top: -920,
			left: -110,
			transform: 'rotate(-75deg)',
		},
		[theme.breakpoints.up('md')]: {
			transform: 'rotate(-45deg)',
			width: 1200,
			top: -660,
			left: -200,
		},
	},
	video: {},
	overlay: {
		position: 'absolute',
		top: 0,
		left: 0,
		background: theme.palette.common.black,
		opacity: 0.6,
		width: '100%',
		height: '100%',
		zIndex: 10,
	},
	innerFigure: {
		background: theme.palette.common.black,
		width: '100%',
		height: '100%',
		position: 'relative',
		[theme.breakpoints.up('sm')]: {
			top: -140,
			left: 400,
			transform: 'rotate(75deg)',
			transformOrigin: 'top left',
		},
		[theme.breakpoints.up('md')]: {
			transform: 'rotate(45deg)',
			left: 130,
		},
		'& img': {
			display: 'block',
			width: '100%',
			zIndex: 2,
			position: 'relative',
		},
		'& $video': {
			display: 'block',
			width: '100%',
			top: 98,
			position: 'fixed',
			left: 30,
			'& iframe': {
				width: '100%',
			},
		},
		'&:hover': {
			'& $btnPlay': {
				opacity: 1,
			},
		},
	},
	btnPlay: {
		position: 'absolute',
		top: '46%',
		left: '46%',
		zIndex: 20,
		width: 80,
		height: 80,
		opacity: 0,
		transition: 'opacity 0.5s ease',
		background: '#FFF !important',
		boxShadow: theme.shadows[3],
		'& svg': {
			width: 50,
			height: 50,
			fill: theme.palette.primary.main,
		},
	},
}));

export default useStyles;
