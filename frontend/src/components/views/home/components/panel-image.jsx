// ./src/components/views/home/components/panel-image.jsx

// External package dependencies.
import React from 'react';

// Local imports.
import { PANEL_IMG_SETTINGS } from 'components/views/home/settings';

// Create an image in a container that uses
// cover fit to fill the available panel space.
const PanelImage = () => {
  const {
    PANEL_IMG_ALT_TEXT, PANEL_IMG_CREATOR,
    PANEL_IMG_FIT, PANEL_IMG, PANEL_IMG_SIZE,
    PANEL_IMG_SOURCE,
  } = PANEL_IMG_SETTINGS;

  return (
    <div style={{width:"100%", height:"100vh"}}>
      <img
        src={PANEL_IMG}
        alt={PANEL_IMG_ALT_TEXT}
        style={{
          width:PANEL_IMG_SIZE,
          height:PANEL_IMG_SIZE,
          objectFit:PANEL_IMG_FIT
        }}
        img_creator={PANEL_IMG_CREATOR}
        img_source={PANEL_IMG_SOURCE}
      />
    </div>
  );
};

export default PanelImage;
