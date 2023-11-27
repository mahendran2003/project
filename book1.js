import {
    AppBar,
    Container,
    CssBaseline,
    Toolbar,
    Typography,
    Paper,
    TextField,
    Select,
    Button,
    MenuItem,
    Card,
    CardContent,
    CardHeader,
    Grid,
    IconButton,
  } from "@mui/material";
export default function Book()
{
    return(
        <Paper elevation={3} sx={{ padding: 3 }}>
          <form>
            <TextField label="FROM" id="FROM" name="FROM" fullWidth required margin="normal" />
            <TextField label="TO" id="TO" name="TO" fullWidth required margin="normal" />
            <TextField
              label="Departure Date"
              id="date"
              name="date"
              type="date"
              fullWidth
              required
              margin="normal"
              InputLabelProps={{ shrink: true }}
            />
                Search Flights
               <Select label="Number of Passengers" id="passengers" name="passengers" fullWidth required margin="normal">
              <MenuItem value="1">Air Indian</MenuItem>
              <MenuItem value="2">Indigo</MenuItem>
              <MenuItem value="3">Singapore Airlines</MenuItem>
              <MenuItem value="4">Vistara</MenuItem>
              <MenuItem value="5">Go Air</MenuItem>
              <MenuItem value="6">EMIRATES</MenuItem>
              <MenuItem value="7">Qatar Airways</MenuItem>
              <MenuItem value="8">Japan Airlines</MenuItem>
              <MenuItem value="9">EVA Air</MenuItem>
              <MenuItem value="10">Jet Blue</MenuItem>
              </Select>
            <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>
              Search Flights
            </Button>
          </form>
        </Paper>
    )
}
