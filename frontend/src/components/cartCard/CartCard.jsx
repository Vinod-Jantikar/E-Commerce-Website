import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";

const CartCard = ({ product }) => {
  return (
    <Stack
      direction="row"
      sx={{
        width: "90%",
        // border: "1px solid black",
        boxSizing: "border-box",
        padding: "2%",
        marginTop: "10px",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
    >
      <Box sx={{width: "25%" , marginRight: "15px"}}>
        <img src={product.imgUrl} alt="productimage" width="100%"/>
      </Box>
      <Box>
        <Typography>{product.nameOfTheProduct}</Typography>
        <Typography>{product.description}</Typography>

        <Stack direction="row">
          {/* Size box  */}
          <Box>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small">Size</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                // value={age}
                label="Size"
                // onChange={handleChange}
              >
                <MenuItem value="">{/* <em>None</em> */}</MenuItem>
                <MenuItem value={38}>38</MenuItem>
                <MenuItem value={40}>40</MenuItem>
                <MenuItem value={42}>42</MenuItem>
                <MenuItem value={44}>44</MenuItem>
                <MenuItem value={46}>46</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Quantity box  */}
          <Box>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small">Qty</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                // value={age}
                label="Qty"
                // onChange={handleChange}
              >
                <MenuItem value="">{/* <em>None</em> */}</MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Stack>

        <Stack direction="row" spacing={1}>
          <Typography variant="body2">Rs.{product.price}</Typography>
          <Typography
            variant="body2"
            sx={{ textDecoration: "line-through", color: "grey" }}
          >
            {product.discount}
          </Typography>
          <Typography variant="body2" sx={{ color: "#f82556" }}>
            {product.offer}
          </Typography>
        </Stack>

        <Box>
          <Typography variant="body2">{product.returnAvailable}</Typography>
        </Box>

        <Box>
          <Button sx={{ color: "#f82556" }}>Remove</Button>
        </Box>
      </Box>
    </Stack>
  );
};

export default CartCard;
