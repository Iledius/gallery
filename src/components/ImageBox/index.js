import react from "react";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "95%",
    height: "80%",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

const ImageBox = (url = "https://i.stack.imgur.com/yQaqh.png") => {
  const classes = useStyles();
  const tileData = [
    {
      img:
        "https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg",
      title: "asd",
      author: "juuso",
    },
    {
      img:
        "https://img-19.ccm2.net/8vUCl8TXZfwTt7zAOkBkuDRHiT8=/1240x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg",
      title: "asd",
      author: "juuso",
    },
    {
      img:
        "https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg",
      title: "asd",
      author: "juuso",
    },
    {
      img:
        "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
      title: "asd",
      author: "juuso",
    },
    {
      img:
        "https://img-19.ccm2.net/8vUCl8TXZfwTt7zAOkBkuDRHiT8=/1240x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg",
      title: "asd",
      author: "juuso",
    },
    {
      img:
        "https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg",
      title: "asd",
      author: "juuso",
    },
    {
      img: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
      title: "asd",
      author: "juuso",
    },
    {
      img:
        "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
      title: "asd",
      author: "juuso",
    },
    {
      img:
        "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
      title: "asd",
      author: "juuso",
    },
    {
      img:
        "https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg",
      title: "asd",
      author: "juuso",
    },
    {
      img:
        "https://img-19.ccm2.net/8vUCl8TXZfwTt7zAOkBkuDRHiT8=/1240x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg",
      title: "asd",
      author: "juuso",
    },
    {
      img:
        "https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg",
      title: "asd",
      author: "juuso",
    },
    {
      img:
        "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
      title: "asd",
      author: "juuso",
    },
    {
      img:
        "https://img-19.ccm2.net/8vUCl8TXZfwTt7zAOkBkuDRHiT8=/1240x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg",
      title: "asd",
      author: "juuso",
    },
    {
      img:
        "https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg",
      title: "asd",
      author: "juuso",
    },
    {
      img: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
      title: "asd",
      author: "juuso",
    },
    {
      img:
        "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
      title: "asd",
      author: "juuso",
    },
    {
      img:
        "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
      title: "asd",
      author: "juuso",
    },
  ];
  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
          <ListSubheader component="div">
            {new Date().getFullYear()}
          </ListSubheader>
        </GridListTile>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default ImageBox;
