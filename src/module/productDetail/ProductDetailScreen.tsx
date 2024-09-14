import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { Button } from "@mui/material";
import Typography from "@mui/joy/Typography";
import Divider from "@mui/joy/Divider";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import CircularProgress from "@mui/material/CircularProgress";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import Rating from "@mui/material/Rating";
import CircleIcon from "@mui/icons-material/Circle";
import CardMedia from "@mui/material/CardMedia";
import DirectionImg from "../../assets/baam-directions.png";

type Props = {
  dataProduct: any;
};

const ProductDetailScreen = (props: Props) => {
  const { dataProduct } = props;
  const isInStock: boolean = dataProduct[0]?.quantityInstock === 0 || false;
  const [selectSize, setSelectSize] = React.useState("");
  const [validateSize, setValidateSize] = React.useState(false);
  const [selectFlavor, setSelectFlavor] = React.useState("");
  const [validateFlavor, setValidateFlavor] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [price, setPrice] = React.useState("");
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const CircleIconActive = (
    <CircleIcon style={{ width: "20px", height: "20px", color: "blue" }} />
  );
  const CircleIconDeActive = (
    <CircleIcon style={{ width: "20px", height: "20px" }} />
  );
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

  const onSelectSize = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectSize(event.target.value);
    setValidateSize(false);
  };
  const onSelectFlavor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectFlavor(event.target.value);
    setValidateFlavor(false);
  };

  useEffect(() => {
    setInterval(() => {
      setIsLoading(true);
    }, 0);
  }, [isLoading]);

  return (
    <>
      <Container maxWidth="lg" sx={{ p: 2 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={6}>
            <Grid size={{ xs: 10, sm: 5, md: 5 }}>
              {isLoading ? (
                <Carousel>
                  {dataProduct[0]?.imgList?.map((item: any, index: number) => {
                    return (
                      <Carousel.Item interval={1500}>
                        <img
                          className="d-block w-100"
                          src={item?.img}
                          alt={item?.id}
                          width={"100%"}
                          height={"100%"}
                        />
                      </Carousel.Item>
                    );
                  })}
                </Carousel>
              ) : (
                <Box sx={{ display: "flex" }}>
                  <CircularProgress />
                </Box>
              )}
            </Grid>
            <Grid size={{ xs: 10, sm: 5, md: 5 }}>
              <Grid container spacing={4}>
                <Grid size={{ xs: 10, sm: 10, md: 10 }}>
                  <Typography level="h2" fontWeight={1000}>
                    {dataProduct[0]?.name}
                  </Typography>
                  <Typography
                    level="body-md"
                    width={"100%"}
                    marginTop={3}
                    marginBottom={3}
                  >
                    {dataProduct[0]?.description}
                  </Typography>
                  <Divider />
                  <Typography
                    gutterBottom
                    level="h2"
                    style={{ color: "red", fontWeight: "bolder" }}
                    marginTop={3}
                  >
                    {price ? (
                      price
                    ) : dataProduct[0]?.minMaxPrice?.length > 1 ? (
                      <p>
                        ฿{dataProduct[0]?.minMaxPrice[0].price} - ฿
                        {dataProduct[0]?.minMaxPrice[1].price}
                      </p>
                    ) : (
                      <p> ฿{dataProduct[0]?.minMaxPrice[0].price}</p>
                    )}
                  </Typography>
                </Grid>
                <Grid size={{ xs: 10, sm: 10, md: 10 }}>
                  <Typography level="body-md" fontWeight={500} marginTop={3}>
                    Size
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
                  </Typography>
                  <Grid container spacing={2} marginTop={2}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <RadioGroup
                        orientation="horizontal"
                        aria-labelledby="segmented-controls-example"
                        name="size"
                        value={selectSize}
                        onChange={onSelectSize}
                        sx={{
                          minHeight: 48,
                          padding: "4px",
                          borderRadius: "12px",
                          bgcolor: "neutral.softBg",
                          "--RadioGroup-gap": "4px",
                          "--Radio-actionRadius": "8px",
                        }}
                      >
                        {dataProduct[0]?.size?.map((item: any) => (
                          <Radio
                            disabled={isInStock || false}
                            key={item?.id}
                            color="neutral"
                            value={item?.value}
                            disableIcon
                            onChange={() => setPrice(`฿${item.price}`)}
                            label={`${item?.value} ${item?.nameShort}`}
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
                          minHeight: 48,
                          padding: "4px",
                          borderRadius: "12px",
                          bgcolor: "neutral.softBg",
                          "--RadioGroup-gap": "4px",
                          "--Radio-actionRadius": "8px",
                        }}
                      >
                        {dataProduct[0]?.flavor?.map((item: any) => (
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
                </Grid>
              </Grid>
            </Grid>
            <Grid size={{ xs: 10, sm: 5, md: 5 }}></Grid>
            <Grid size={{ xs: 10, sm: 5, md: 5 }}>
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
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={6}>
            <Grid size={12}>
              <Box sx={{ width: "100%", typography: "body1", marginTop: 10 }}>
                <Tabs aria-label="Basic tabs" defaultValue={0}>
                  <TabList>
                    <Tab>Over view</Tab>
                    <Tab>Benefit</Tab>
                    <Tab>Direction</Tab>
                  </TabList>
                  <TabPanel value={0}>
                    <Grid container>
                      <Grid size={{ xs: 12, sm: 12, md: 12 }}>
                        <h3>Overview</h3>
                        <h5>Whey protien</h5>
                      </Grid>
                      <Grid size={{ xs: 3, sm: 3, md: 3 }}>
                        <p>เพิ่มกล้ามเนื้อ</p>
                      </Grid>
                      <Grid size={{ xs: 9, sm: 9, md: 9 }}>
                        <Rating
                          name="size-small"
                          defaultValue={5}
                          size="small"
                          emptyIcon={CircleIconDeActive}
                          icon={CircleIconActive}
                        />
                      </Grid>

                      <Grid size={{ xs: 3, sm: 3, md: 3 }}>
                        <p>ลดไขมัน</p>
                      </Grid>
                      <Grid size={{ xs: 9, sm: 9, md: 9 }}>
                        <Rating
                          name="size-small"
                          defaultValue={3}
                          size="small"
                          emptyIcon={CircleIconDeActive}
                          icon={CircleIconActive}
                        />
                      </Grid>

                      <Grid size={{ xs: 3, sm: 3, md: 3 }}>
                        <p>เพิ่มน้ำหนัก</p>
                      </Grid>
                      <Grid size={{ xs: 9, sm: 9, md: 9 }}>
                        <Rating
                          name="size-small"
                          defaultValue={4}
                          size="small"
                          emptyIcon={CircleIconDeActive}
                          icon={CircleIconActive}
                        />
                      </Grid>

                      <Grid size={{ xs: 3, sm: 3, md: 3 }}>
                        <p>ความเร็วในการดูดซึม</p>
                      </Grid>
                      <Grid size={{ xs: 9, sm: 9, md: 9 }}>
                        <Rating
                          name="size-small"
                          defaultValue={4}
                          size="small"
                          emptyIcon={CircleIconDeActive}
                          icon={CircleIconActive}
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 12, md: 12 }}>
                        <p>
                          {" "}
                          เคซีน (Micellar Casein) โปรตีนจากนมวัวธรรมชาติ
                          พี่น้องกับเวย์โปรตีน แต่เป็นโปรตีนที่ย่อยได้ช้ากว่า
                          โดยใช้เวลาประมาณ 2 - 4 ชั่วโมงขึ้นไปกว่าจะย่อยได้หมด
                          (เวย์ใช้เวลาประมาณ 15 - 30 นาที)
                          จึงช่วยให้ร่างกายมีโปรตีนหล่อเลี้ยงได้นาน อิ่มนาน
                          อยู่ท้อง เหมาะกับช่วงเวลาที่ร่างกายขาดโปรตีนนานๆ
                          อย่างเช่น ตอนนอน หรือ ระหว่างมื้ออาหาร
                          และเป็นโปรตีนที่ทนความร้อนได้ดีกว่าเวย์
                          เหมาะกับสายสร้างกล้าม หรือ เชฟนักกล้าม
                          ที่ชอบคิดเมนูโปรตีนสูงใหม่ๆ และคนที่คุมอาหาร
                          สามารถใช้ทดแทนของว่างได้
                        </p>
                      </Grid>

                      <Grid size={{ xs: 12, sm: 12, md: 12 }}>
                        <p> ✓ Miceallar Casein โปรตีนดูดซึมช้า 25 g.*</p>
                        <p>
                          {" "}
                          ✓ พลังงานประมาณ 120 Kcal.(ไขมัน 1 กรัม, คาร์โบไฮเดรท 2
                          กรัม)*
                        </p>
                        <p> ✓ ให้ BCAA ~6 g. , Glutamine ~5 g.*</p>
                        <p>
                          {" "}
                          ✓ ลดช่วงที่ร่างกายขาดโปรตีน และ
                          ป้องกันกล้ามเนื้อสลายตัว
                        </p>
                        <p> ✓ ไม่มีการใส่น้ำตาล (ใช้สารให้ความหวานทดแทน)</p>
                      </Grid>
                    </Grid>
                  </TabPanel>
                  <TabPanel value={1}>
                  <Grid container>

                  </Grid>
                   <Grid size={{ xs: 12, sm: 12, md: 12 }}>
                        <h3>Benefit</h3>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 12, md: 12 }}>
                        <h5>CASEIN PROTEIN</h5>
                        <p>
                          {" "}
                          เคซีน (Micellar Casein) โปรตีนจากนมวัวธรรมชาติ
                          พี่น้องกับเวย์โปรตีน แต่เป็นโปรตีนที่ย่อยได้ช้ากว่า
                          โดยใช้เวลาประมาณ 2 - 4 ชั่วโมงขึ้นไปกว่าจะย่อยได้หมด
                          (เวย์ใช้เวลาประมาณ 15 - 30 นาที)
                          จึงช่วยให้ร่างกายมีโปรตีนหล่อเลี้ยงได้นาน อิ่มนาน
                          อยู่ท้อง เหมาะกับช่วงเวลาที่ร่างกายขาดโปรตีนนานๆ
                          อย่างเช่น ตอนนอน หรือ ระหว่างมื้ออาหาร
                          และเป็นโปรตีนที่ทนความร้อนได้ดีกว่าเวย์
                          เหมาะกับสายสร้างกล้าม หรือ เชฟนักกล้าม
                          ที่ชอบคิดเมนูโปรตีนสูงใหม่ๆ และคนที่คุมอาหาร
                          สามารถใช้ทดแทนของว่างได้
                        </p>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 12, md: 12 }}>
                        <h5>ประโยชน์ของเวย์โปรตีน</h5>
                        <p>
                        เชื่อว่าสายกล้ามทุกคน บ้าโปรตีนแน่นอน โดยเฉพาะโปรตีนที่ย่อยไวๆ ดูดซึมง่ายๆ 
                        เพื่อให้กล้ามเนื้อเอาไปใช้ได้เร็วๆ แต่ร่างกายต้อการโปรตีนแทบจะตลอดเวลาในการเอาไปสร้าง และซ่อมแซมกล้ามเนื้อ เพราะฉะนั้นโปรตีนที่ย่อยช้า ทั้งจากเนื้อสัตว์ และ จากอาหารเสริมจาก เคซีน นั้นก็สำคัญไม่แพ้กัน แถมการหล่อเลี้ยงกล้ามเนื้อ้วยโปรตีนอย่างสม่ำเสมออย่างต่อเนื่อง ยังช่วยป้องกันการย่อยสลายโปรตีนในกล้ามเนื้อ (Catabolic) 
                        ทำให้กล้ามเนื้อของคุณไม่หายไป ในช่วงที่ขาดอาหารอีกด้วย
                        </p>
                      </Grid>

                  </TabPanel>
                  <TabPanel value={2}>
                  <Grid size={{ xs: 12, sm: 12, md: 12 }}>
                  <h3>Direction</h3>
                  </Grid>
                  <CardMedia
                      component="img"
                      alt='DirectionImg'
                    //   height="350px"
                    //   width="350px"
                      image={DirectionImg}
                      sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                    />
                  </TabPanel>
                </Tabs>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default ProductDetailScreen;
