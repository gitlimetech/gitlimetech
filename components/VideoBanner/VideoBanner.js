import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PlayIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import SendIcon from '@material-ui/icons/Send';
import YouTube from 'react-youtube';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { borders } from '@mui/system';
import { useSpring, animated } from 'react-spring';
import Carousel from 'react-material-ui-carousel';
import { makeStyles } from '@material-ui/core';
import { useText } from '~/theme/common';
import { withTranslation } from '~/i18n';
import imgApi from '~/public/images/imgAPI';
import yt from '~/youtube';
import useStyle from './banner-style';

const items = [
	{
		id: 1,
		title: 'One Stop Solution at Gitlime',
		desc: 'We have a strategic family. It’s called Gitlime. yes! You can be a part of it .Our team has an undeniable chemistry to provide you the platform to bring your ideas into actual running products .',
	},
	{
		id: 2,
		title: 'Software Product Design & Development ',
		desc: 'Develop results-driven products for entrepreneurs, startups, and enterprises with a leading software development company.We use your opinions to start discussions, transforming product ideas to digital realities from design to development ',
		// img: imgApi.agency[0]
	},
	{
		id: 3,
		title: 'Application Deployment & maintenance ',
		desc: 'Developing a proficient software product development is really a tough task but to maintain it , it is tougher . We provide the best solution at Git Lime for your product deployment , maintenance , and monitor .',
		// img: imgApi.agency[0]
	},
	{
		id: 4,
		title: 'Digital marketing  and Branding',
		desc: 'Changing consumer behaviour is forcing digital marketers to pivot their strategies, as it becomes increasingly difficult to keep up with customer expectations and maintain a competitive edge, whilst keeping up to date with the latest tech.',
		// img: imgApi.agency[0]
	},
];
const useStyles = makeStyles((theme) => ({}));

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;
function VideoBanner(props) {
	// Theme breakpoints
	const theme = useTheme();
	const text = useText();
	const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
	const isTablet = useMediaQuery(theme.breakpoints.up('sm'));
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));

	// Translation function
	const { t } = props;

	// Youtube player
	const [play, setPlayed] = useState(false);
	const [playCtrl, setPlayedCtrl] = useState(true);
	const [player, setPlayer] = useState([]);
	const [position, setPosition] = useSpring(() => ({
		xy: [0, 0],
		config: { mass: 50, tension: 550, friction: 140 },
	}));
	const classes = useStyle();

	useEffect(() => {
		if (isDesktop) {
			/* Attention
			 ** HandleScroll function to optimize site with video background may give an error log
			 ** Uncaught TypeError: Cannot read property 'src' of null
			 ** It's because HMR in development mode, and react-youtube need to refresh.
			 ** The error log will not happen in production mode or just reload browser (development mode)
			 ** You can uncomment _onPlay() function, if you don't want see error browser log.
			 ** But then every changes you make, the browser will auto reload.
			 */
			// _onPlay();
		}
	}, []);

	const _onEnd = (event) => {
		event.target.playVideo();
	};

	const _onPlay = () => {
		const curTime = player[0].getCurrentTime();
		if (curTime > 0) {
			setPlayed(true);
			setPlayedCtrl(true);
		}
	};

	const _onReady = (event) => {
		player.push(event.target);
		setPlayer(player);
	};

	const _onTogglePause = () => {
		setPlayedCtrl(!playCtrl);
		if (playCtrl) {
			player[0].pauseVideo();
		} else {
			player[0].playVideo();
		}
	};

	const opts = {
		height: '720',
		width: '1080',
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 1,
			controls: 0,
			rel: 0,
			showinfo: 0,
			mute: 1,
			origin: 'http://localhost:3001',
		},
	};

	// const settings = {
	//   dots: true,
	//   infinite: true,
	//   speed: 500,
	//   slidesToShow: 1,
	//   slidesToScroll: 1
	// };

	return (
		<div className={classes.heroContent}>
			{/* <Hidden smUp>
        <figure className={classes.mobileCover}>
          <img src={imgApi.agency[0]} alt="cover" />
        </figure>
      </Hidden> */}
			<Container fixed={isDesktop}>
				<Grid container spacing={6}>
					<Grid sx={{ border: 1 }} item md={6} xs={12}>
						{/* <div className={classes.bannerText}>
              <div className={classes.title}>
                <Typography variant="h3" className={clsx(classes.textHelper, text.title)}>
                  {t('common:agency-landing.banner_title')}
                </Typography>
              </div>
              <Typography className={clsx(classes.subtitle, text.subtitle)} variant="h5">
                {t('common:agency-landing.banner_subtitle')}
              </Typography>
              <Button variant="outlined" size="large" color="secondary" className={classes.button}>
                {t('common:agency-landing.banner_button')}
                <SendIcon className={classes.icon} />
              </Button>
            </div> */}
						{/* <div>
              <h2>Start editing to see some magic happen!</h2>
            </div> */}
						<div className={classes.slider}>
							<Carousel
								indicatorIconButtonProps={{
									style: {
										padding: '10px', // 1
										color: 'grey', // 3
									},
								}}
								indicatorContainerProps={{
									style: {
										marginTop: '70px', // 5
										marginBottom: '0px', // 5
										textAligh: 'center', // 4
										color: 'green',
									},
								}}
							>
								{items.map((element, index) => (
									<div key={index.toString()}>
										<Typography
											className={clsx(classes.textHelper, text.title2)}
										>
											{element.title}
										</Typography>
										<Typography
											className={clsx(
												classes.textHelper,
												text.subtitle,
												classes.subtitle,
											)}
										>
											{element.desc}
										</Typography>
										<Link href="/contact">
											<Button
												variant="outlined"
												size="large"
												color="secondary"
												className={classes.button}
											>
												{t('common:agency-landing.banner_button')}
												<SendIcon className={classes.icon} />
											</Button>
										</Link>
									</div>
								))}
							</Carousel>
						</div>
					</Grid>
					{isTablet && (
						<Grid
							item
							md={6}
							onMouseMove={({ clientX: x, clientY: y }) =>
								setPosition({ xy: calc(x, y) })
							}
						>
							<div className="">
								<figure className="">
									<img src={imgApi.agency[8]} alt="cover" />
								</figure>
							</div>

							{/* <div className={classes.videoWrap}>
                <div className={classes.videoFigure}>
                  <div className={classes.innerFigure}>
                    <Hidden mdDown>
                      {play && (
                        <IconButton
                          className={classes.btnPlay}
                          onClick={_onTogglePause}
                        >
                          {playCtrl ? <PauseIcon /> : <PlayIcon />}
                        </IconButton>
                      )}
                    </Hidden>
                    {!play || isMobile ? <img src={imgApi.agency[0]} alt="cover" /> : null}
                    <div className={classes.overlay} />
                    {yt.use && (
                      <div className={classes.video}>
                        <Hidden mdDown>
                          <YouTube
                            videoId="rX2T9jH0OxA"
                            opts={opts}
                            onReady={_onReady}
                            onEnd={_onEnd}
                            onPlay={_onPlay}
                          />
                        </Hidden>
                      </div>
                    )}
                  </div>
                </div>
              </div> */}
						</Grid>
					)}
				</Grid>
			</Container>
		</div>
	);
}

VideoBanner.propTypes = {
	t: PropTypes.func.isRequired,
};

export default withTranslation(['agency-landing'])(VideoBanner);
