FWDEVPUtils.onReady(function(){

				FWDEVPlayer.videoStartBehaviour = "pause";
				
				new FWDEVPlayer({		
					//main settings
					instanceName:"player1",
					parentId:"myDiv",
					mainFolderPath:"content",
					skinPath:"modern_skin_white",
					initializeOnlyWhenVisible:"no",
					displayType:"responsive",
					autoScale:"yes",
					fillEntireVideoScreen:"no",
					openDownloadLinkOnMobile:"no",
					useHEXColorsForSkin:"no",
					normalHEXButtonsColor:"#FF0000",
					selectedHEXButtonsColor:"#FFFFFF",
					privateVideoPassword:"428c841430ea18a70f7b06525d4b748a",
					startAtTime:"",
					stopAtTime:"",
					startAtVideoSource:3,
					videoSource:[
						{source:"", label:"small version"},
						{source:"", label:"hd720"},
						{source:"https://edge126.rcs-rds.ro/utvedge/musicchannelhq.stream/playlist.m3u8", label:"hd1080"}
					],
					posterPath:"content/posters/mp4-poster.jpg, content/posters/mp4-poster-mobile.jpg",
					showErrorInfo:"yes",
					fillEntireScreenWithPoster:"no",
					rightClickContextMenu:"developer",
					disableDoubleClickFullscreen:"no",
					useChromeless:"no",
					showPreloader:"no",
					addKeyboardSupport:"yes",
					autoPlay:"no",
					loop:"no",
					scrubAtTimeAtFirstPlay:"00:00:00",
					maxWidth:600,
					maxHeight:380,
					volume:.9,
					greenScreenTolerance:200,
					backgroundColor:"#000000",
					posterBackgroundColor:"#000000",
					//logo settings
					showLogo:"no",
					hideLogoWithController:"yes",
					logoPosition:"topRight",
					logoLink:"",
					logoMargins:5,
					//controller settings
					showController:"yes",
					showControllerWhenVideoIsStopped:"yes",
					showVolumeScrubber:"yes",
					showVolumeButton:"yes",
					showTime:"no",
					showQualityButton:"no",
					showSubtitleButton:"no",
					showShareButton:"no",
					showEmbedButton:"no",
					showDownloadButton:"no",
					showFullScreenButton:"yes",
					repeatBackground:"no",
					controllerHeight:42,
					controllerHideDelay:1,
					startSpaceBetweenButtons:8,
					spaceBetweenButtons:12,
					mainScrubberOffestTop:1,
					scrubbersOffsetWidth:4,
					timeOffsetLeftWidth:1,
					timeOffsetRightWidth:-2,
					volumeScrubberWidth:90,
					volumeScrubberOffsetRightWidth:2,
					timeColor:"#6a6a6a",
					youtubeQualityButtonNormalColor:"#919191",
					youtubeQualityButtonSelectedColor:"#000000",
					//cuepoints
					executeCuepointsOnlyOnce:"no",
					//annotations
					annotiationsListId:"none",
					showAnnotationsPositionTool:"no",
					//subtitles
					showSubtitleButton:"no",
					subtitlesOffLabel:"Subtitle off",
					startAtSubtitle:1,
					subtitlesSource:[
						{subtitlePath:"content/english_subtitle.txt", subtileLabel:"English"},
						{subtitlePath:"content/romanian_subtitle.txt", subtileLabel:"Romanian"},
						{subtitlePath:"content/spanish_subtitle.txt", subtileLabel:"Spanish"}
					],
					//audio visualizer
					audioVisualizerLinesColor:"#0099FF",
					audioVisualizerCircleColor:"#FFFFFF",
					//advertisement on pause window
					aopwTitle:"Advertisement",
					aopwSource:"",
					aopwWidth:400,
					aopwHeight:240,
					aopwBorderSize:6,
					aopwTitleColor:"#FFFFFF",
					//playback rate / speed
					showPlaybackRateButton:"yes",
					defaultPlaybackRate:"1", //0.25, 0.5, 1, 1.25, 1.5, 2
					//embed window
					embedWindowCloseButtonMargins:7,
					borderColor:"#CDCDCD",
					mainLabelsColor:"#000000",
					secondaryLabelsColor:"#444444",
					shareAndEmbedTextColor:"#999999",
					inputBackgroundColor:"#f5f5f5",
					inputColor:"#333333"
				});
			});