import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/joy/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import QuantityInput from "./Quantity";
import Divider from "@mui/material/Divider";

type Props = {
  openModal: boolean;
  setOpenModal: Function;
  productData: any;
};

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs(props: Props) {
  const { openModal, setOpenModal, productData } = props;
  const isInStock: boolean = productData?.quantityInstock === 0 || false;
  const [selectSize, setSelectSize] = React.useState("");
  const [selectFlavor, setSelectFlavor] = React.useState("");
  const [validateSize, setValidateSize] = React.useState(false);
  const [validateFlavor, setValidateFlavor] = React.useState(false);
  const [price, setPrice] = React.useState("");

  const handleCloseModal = () => {
    setOpenModal(false);
    setValidateSize(false);
    setValidateFlavor(false);
    setSelectSize("");
    setSelectFlavor("");
    setPrice("")
  };

  const onSelectSize = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectSize(event.target.value);
    setValidateSize(false);
  };

  const onSelectFlavor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectFlavor(event.target.value);
    setValidateFlavor(false);
  };

  const onAddToCart = () => {
    if (selectSize) {
      setValidateSize(false);
    } else {
      setValidateSize(true);
    }
    if (selectFlavor) {
      setValidateFlavor(false);
    } else {
      setValidateFlavor(true);
    }
  };

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleCloseModal}
        aria-labelledby="customized-dialog-title"
        open={openModal}
      >
        <IconButton
          aria-label="close"
          onClick={handleCloseModal}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Container maxWidth="lg" sx={{ p: 2 }}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid size={{ xs: 8, sm: 4, md: 4 }}>
                  <img
                    src={productData.img}
                    alt={productData.name}
                    width="100%"
                    height="auto"
                  />
                </Grid>
                <Grid size={{ xs: 8, sm: 6, md: 6 }}>
                  <Typography level="body-md" fontWeight={500}>
                    {productData.name}
                  </Typography>

                  <Typography
                    level="body-md"
                    fontWeight={100}
                    width={"145%"}
                    marginTop={3}
                  >
                    {productData.description}
                  </Typography>
                </Grid>
              </Grid>
              <Typography
                    gutterBottom
                    level="h2"
                    style={{ color: "red", fontWeight: "bolder" }}
                  >
                        {price ? (
                        price
                        ) : productData?.minMaxPrice?.length > 1 ? (
                        <p>
                            ฿{productData?.minMaxPrice[0]?.price} - ฿
                            {productData?.minMaxPrice[1]?.price}
                        </p>
                        ) : (
                        <p> ฿{productData?.minMaxPrice[0]?.price}</p>
                        )}
                  </Typography>
              <Grid container>
                <Grid size={{ xs: 6, md: 8 }}>
                  <Typography
                    level="h4"
                    color="primary"
                    fontWeight="lg"
                  >
                    Please select your options
                  </Typography>
                </Grid>
                <Grid size={{ xs: 6, md: 4 }}>
                  <Typography
                    level="body-sm"
                    color="danger"
                    fontWeight="lg"
                    textAlign={"end"}
                  >
                    EXP: {productData.expire}
                  </Typography>
                </Grid>
              </Grid>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography level="body-md" fontWeight={500} marginTop={3}>
                  Size
                </Typography>
                <Typography level="body-md" marginTop={3} fontWeight={100}>
                  (Select 1)
                </Typography>
                {validateSize && (
                  <Typography
                    level="body-md"
                    color="danger"
                    fontWeight={500}
                    marginTop={3}
                    marginLeft={1}
                  >
                    Please select size
                  </Typography>
                )}
              </Box>

              <Grid container spacing={2} marginTop={2}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <RadioGroup
                    orientation="horizontal"
                    aria-labelledby="segmented-controls-example"
                    name="size"
                    value={selectSize}
                    onChange={onSelectSize}
                    sx={{
                      minHeight: '100%',
                      padding: "4px",
                      borderRadius: "12px",
                      bgcolor: "neutral.softBg",
                      "--RadioGroup-gap": "4px",
                      "--Radio-actionRadius": "8px",
                    }}
                  >
                    {productData?.size?.map((item: any) => (
                      <Radio
                        disabled={isInStock || false}
                        key={item?.id}
                        color="neutral"
                        value={item?.value}
                        disableIcon
                        label={`${item?.value} ${item?.nameShort}`}
                        variant="plain"
                        onChange={() => setPrice(`฿${item?.price}`)}
                        sx={{ px: 2, alignItems: "center" }}
                        slotProps={{
                          action: ({ checked }) => ({
                            sx: {
                              ...(checked && {
                                bgcolor: "background.surface",
                                boxShadow: "sm",
                                "&:hover": {
                                  bgcolor: "background.surface",
                                },
                              }),
                            },
                          }),
                        }}
                      />
                    ))}
                  </RadioGroup>
                </Box>
              </Grid>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography level="body-md" fontWeight={500} marginTop={3}>
                  Flavor
                </Typography>
                <Typography level="body-md" marginTop={3} fontWeight={100}>
                  (Select 1)
                </Typography>
                {validateFlavor && (
                  <Typography
                    level="body-md"
                    color="danger"
                    fontWeight={500}
                    marginTop={3}
                    marginLeft={1}
                  >
                    Please select flavor
                  </Typography>
                )}
              </Box>
              <Grid container spacing={2} marginTop={2} marginBottom={2}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <RadioGroup
                    orientation="horizontal"
                    aria-labelledby="segmented-controls-example"
                    name="flavor"
                    value={selectFlavor}
                    onChange={onSelectFlavor}
                    sx={{
                        minHeight: '100%',
                      padding: "4px",
                      borderRadius: "12px",
                      bgcolor: "neutral.softBg",
                      "--RadioGroup-gap": "4px",
                      "--Radio-actionRadius": "8px",
                    }}
                  >
                    {productData?.flavor?.map((item: any) => (
                      <Radio
                        disabled={isInStock || false}
                        key={item.id}
                        color="neutral"
                        value={item.name}
                        disableIcon
                        label={item.name}
                        variant="plain"
                        sx={{ px: 2, alignItems: "center" }}
                        slotProps={{
                          action: ({ checked }) => ({
                            sx: {
                              ...(checked && {
                                bgcolor: "background.surface",
                                boxShadow: "sm",
                                "&:hover": {
                                  bgcolor: "background.surface",
                                },
                              }),
                            },
                          }),
                        }}
                      />
                    ))}
                  </RadioGroup>
                </Box>
              </Grid>
            </Box>
            <Divider />
            <Grid container spacing={2} marginTop={2}>
              <Grid size={{ xs: 4, sm: 4, md: 4 }}>
                <Typography level="body-md" fontWeight={500}>
                  Quantity
                </Typography>
              </Grid>
              <Grid size={{ xs: 4, sm: 4, md: 4 }}>
                <div
                  style={
                    isInStock
                      ? { pointerEvents: "none" }
                      : { pointerEvents: "all" }
                  }
                >
                  <QuantityInput disabled={isInStock || false} />
                </div>
              </Grid>
            </Grid>
          </Container>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Button
              variant="contained"
              disableElevation
              style={{ width: "100%", marginTop: 5 }}
              color="success"
              onClick={onAddToCart}
              disabled={isInStock || false}
            >
              {isInStock ? "Out of stock" : "Add to cart"}
            </Button>
          </Box>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
