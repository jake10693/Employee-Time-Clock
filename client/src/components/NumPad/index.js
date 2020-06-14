import React from 'react'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import "./style.css"

function handleClick(event) {
    let key = event.currentTarget.value;
    console.log(key)
    event.stopPropagation()
}

 function NumPad() {
    return (
        <div className="num-container">
            <Typography variant="h1" component="h2">****</Typography>

            <Grid container>
                <Grid item xs={12}>
                    <Button className="num-buttons" size="large" variant="contained" color="primary" value="7" onClick={handleClick}>7</Button>
                    <Button className="num-buttons" size="large" variant="contained" color="primary" value="8" onClick={handleClick}>8</Button>
                    <Button className="num-buttons" size="large" variant="contained" color="primary" value="9" onClick={handleClick}>9</Button>
                </Grid>
                <Grid item xs={12}>
                    <Button className="num-buttons" size="large" variant="contained" color="primary" value="4" onClick={handleClick}>4</Button>
                    <Button className="num-buttons" size="large" variant="contained" color="primary" value="5" onClick={handleClick}>5</Button>
                    <Button className="num-buttons" size="large" variant="contained" color="primary" value="6" onClick={handleClick}>6</Button>
                </Grid>
                <Grid item xs={12}>
                    <Button className="num-buttons" size="large" variant="contained" color="primary" value="1" onClick={handleClick}>1</Button>
                    <Button className="num-buttons" size="large" variant="contained" color="primary" value="2" onClick={handleClick}>2</Button>
                    <Button className="num-buttons" size="large" variant="contained" color="primary" value="3" onClick={handleClick}>3</Button>
                </Grid>
                <Grid item xs={12}>
                    <Button className="num-buttons" size="large" variant="contained" color="primary"/>
                    <Button className="num-buttons" size="large" variant="contained" color="primary" value="0" onClick={handleClick}>0</Button>
                    <Button className="num-buttons" size="large" variant="contained" color="primary"/>
                </Grid>
            </Grid>
        </div>
    );
}


export default NumPad

