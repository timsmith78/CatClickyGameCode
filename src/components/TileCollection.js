import React, { Component } from 'react'
import Tile from './Tile'
import PrintScore from './PrintScore'

const collectionSize = 10


const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}


class TileCollection extends Component {    

    state = {
        tiles: [],
        score: 0,
        hiScore: 0
    }

    componentDidMount() {
        this.resetTiles()
    }
    
    resetTiles = () => {
        let initTiles = new Array(collectionSize)
        for (let i = 0; i < collectionSize; ++i) {
            initTiles[i] = { id: i, clicked: false }
        }
        this.setState( { tiles: shuffleArray(initTiles), score: 0 })
    }

    handleClick = (tile) => {
        if (tile.clicked) {
            if (this.state.score > this.state.hiScore) {
                this.setState( { hiScore: this.state.score } )
            }
            this.resetTiles()
        } else {
            let tempArr = this.state.tiles
            for (let idx = 0; idx < collectionSize; ++idx) {
                if (tempArr[idx].id === tile.id) {
                    tempArr[idx].clicked = true
                }
            }
            const newScore = this.state.score + 1
            this.setState( { tiles: shuffleArray(tempArr), score: newScore })

        }
    }

    render() {
        return (
            <div className='container'>
            <div className='row justify-content-center'>
            <PrintScore label='Score' score={this.state.score}/>
            <PrintScore label='Hi Score' score={this.state.hiScore}/>
            </div>
            <div className='row no-gutters justify-content-center'>
            {this.state.tiles.map(tile => <Tile key={tile.id} catId={tile.id} onClick={() => this.handleClick(tile)}/>)}
            </div>
            </div>
        )
    }
    
    
}

export default TileCollection
