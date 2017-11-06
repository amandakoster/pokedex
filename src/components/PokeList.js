// import React, { Component } from 'react';



//   const PokeGride = () => (
//     <div style={styles.root}>
//       <GridList
//         cellHeight={180}
//         style={styles.gridList}
//       >
//         <Subheader>December</Subheader>
//         {tilesData.map((tile) => (
//           <GridTile
//             key={tile.img}
//             title={tile.title}
//             subtitle={<span>by <b>{tile.author}</b></span>}
//             actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
//           >
//             <img src={tile.img} />
//           </GridTile>
//         ))}
//       </GridList>
//     </div>
//   );
  
//   export default PokeGrid;

<ul>
{this.state.pokemonList.map((item, i) => {
  return (
    <li key={i}>
      <p> {item.id} </p>
    </li>
  )
})}
</ul>