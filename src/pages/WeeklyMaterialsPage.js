import { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AppHeader from '../components/AppHeader';
import Footer from '../components/Footer';
import useBossTimerStyles from '../styles/useBossTimerStyles';
import materialBelow140 from '../assets/Screenshot 2026-04-13 104520.png';
import material140to150 from '../assets/Screenshot 2026-04-13 104542.png';
import material150to160 from '../assets/Screenshot 2026-04-13 104554.png';
import material160to170 from '../assets/Screenshot 2026-04-13 104603.png';
import material170to180 from '../assets/Screenshot 2026-04-13 104611.png';
import material180Plus from '../assets/Screenshot 2026-04-13 104622.png';

const materialImages = [
  { src: materialBelow140, title: '140 Below' },
  { src: material140to150, title: '140 to 150' },
  { src: material150to160, title: '150 to 160' },
  { src: material160to170, title: '160 to 170' },
  { src: material170to180, title: '170 to 180' },
  { src: material180Plus, title: '180 Plus' },
];

function WeeklyMaterialsPage() {
  const classes = useBossTimerStyles();
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!selectedImage) {
      return undefined;
    }

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [selectedImage]);

  return (
    <>
      <AppHeader classes={classes} />
      <Container maxWidth="lg" className={classes.main}>
        <Box className={classes.materialsHeader}>
          <Typography variant="h4">Weekly Materials</Typography>
          <Typography variant="body1" className={classes.muted}>
            Reference guide for weekly boss material drops.
          </Typography>
        </Box>

        <Box className={classes.materialsGrid}>
          {materialImages.map((image) => (
            <Box key={image.title} className={classes.materialImagePanel}>
              <Typography variant="h6" className={classes.materialImageTitle}>{image.title}</Typography>
              <button className={classes.materialImageButton} onClick={() => setSelectedImage(image)} type="button">
                <img className={classes.materialImage} src={image.src} alt={`${image.title} weekly materials`} />
              </button>
            </Box>
          ))}
        </Box>

        <Box className={classes.materialCredit}>
          <Typography variant="body2">Credits: Madam Blue for the Images</Typography>
        </Box>
        <Footer classes={classes} />
      </Container>

      {selectedImage ? (
        <Box className={classes.imageViewer} role="dialog" aria-modal="true" aria-label={`${selectedImage.title} weekly materials preview`}>
          <button className={classes.imageViewerBackdrop} onClick={() => setSelectedImage(null)} type="button" aria-label="Close preview" />
          <Box className={classes.imageViewerContent}>
            <Box className={classes.imageViewerHeader}>
              <Typography variant="h6">{selectedImage.title}</Typography>
              <button className={classes.imageViewerClose} onClick={() => setSelectedImage(null)} type="button">Close</button>
            </Box>
            <img className={classes.imageViewerImage} src={selectedImage.src} alt={`${selectedImage.title} weekly materials large preview`} />
            <Typography variant="body2" className={classes.imageViewerCredit}>Credits: Blue phrase</Typography>
          </Box>
        </Box>
      ) : null}
    </>
  );
}

export default WeeklyMaterialsPage;
