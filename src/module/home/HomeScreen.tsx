import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { itemList } from "../../utils/data";
import { numberWithCommas } from "../../utils/money";
import CustomizedDialogs from "../../component/Modal";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import BannerHeader from "../../assets/images/banner-header.png";
import Divider from "@mui/joy/Divider";
import { useNavigate } from "react-router-dom";
import clientRoute from "../../config/clientRoute";

const HomeScreen = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [productById, setProductById] = React.useState([]);
  const navigate = useNavigate();

  const handleClickOpenModal = (value: any) => {
    setProductById(value);
    setOpenModal(true);
  };

  const onChangePageToDetail = (value: any) => {
    navigate(clientRoute.detail(value?.id), { state: value });
  };

  return (
    <>
      {productById.length !== 0 && (
        <CustomizedDialogs
          openModal={openModal}
          setOpenModal={setOpenModal}
          productData={productById}
        />
      )}

      <Container maxWidth="lg" sx={{ p: 2 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="div">
            Whey Protein
          </Typography>

          <Divider />
          <img src={BannerHeader} alt="Banner" className="Banner-Header" />
          <Grid container spacing={2}>
            {itemList.map((item: any) => {
              const minPrice = numberWithCommas(item?.minMaxPrice[0]?.price);
              const maxPrice = numberWithCommas(item?.minMaxPrice[1]?.price);
              const isInStock = item?.quantityInstock === 0 || false;
              return (
                <Grid size={{ xs: 10, sm: 6, md: 4 }}>
                  <Card sx={{ height: "100%" }}>
                    {isInStock && (
                      <div className="Sold-Out-Coverlay">Sold Out</div>
                    )}
                    <CardMedia
                      component="img"
                      alt={item?.name}
                      height="250"
                      image={item.img}
                      sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                      onClick={() => onChangePageToDetail(item)}
                      style={
                        isInStock
                          ? { opacity: "30%", cursor: "pointer" }
                          : { opacity: "100%", cursor: "pointer" }
                      }
                    />

                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                        className="Text-Line-Clamp"
                      >
                        {item.description}
                      </Typography>

                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<PlayArrowIcon />}
                        onClick={() => onChangePageToDetail(item)}
                        style={{
                          width: "7rem",
                          fontSize: "x-small",
                          height: "23px",
                          marginTop: "10px",
                        }}
                      >
                        view detail
                      </Button>
                      <Typography
                        gutterBottom
                        variant="h5"
                        marginTop={3}
                        style={{ color: "red", fontWeight: "bolder" }}
                      >
                        {item?.minMaxPrice?.length > 1 ? (
                          <p>
                            ฿{minPrice} - ฿{maxPrice}
                          </p>
                        ) : (
                          <p> ฿{minPrice}</p>
                        )}
                      </Typography>
                    </CardContent>

                    <CardActions
                      style={{ justifyContent: "center", marginBottom: "1rem" }}
                    >
                      <Button
                        variant="contained"
                        color="error"
                        size="small"
                        disabled={isInStock}
                        onClick={() => handleClickOpenModal(item)}
                      >
                        Add to cart
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default HomeScreen;
