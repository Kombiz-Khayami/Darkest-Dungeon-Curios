import React from 'react';
import imagePaths from './imagePaths.js';
import redCross_icon from "./images/redCross.png";

function FarmestedCurios() {

    return(
        <div class="wrapper-row">
              <div class="wrapper-curio">          
                  Gleaming Shards
                  <img src={imagePaths.curios.gleamingShards.path} />
              </div>
              <div class="wrapper-without-cleansing">
                      <div class="item-without-cleansing">
                          <img src={redCross_icon}/>
                      </div>
              </div>
              <div> 
                  <div class="items-cleansing">
                      <img src={imagePaths.activators.shard.path} /> Shards x5-15.
                      Glittering crystals spill onto the ground.
                  </div>  
              </div>
          </div>
      
    );

}

export default FarmestedCurios;