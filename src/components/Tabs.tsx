import * as React from 'react';
import { Tabs, Tab, Box, Typography} from '@material-ui/core'
import ContentTab1 from '../pages/contentTab1';
import ContentTab2 from '../pages/contentTab2';
import ContentTab3 from '../pages/contentTab3';
import { useState } from 'react';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function TabList() {
  const [active, setActive] = useState(0)
  const [value, setValue] = React.useState(0);
  function a11yProps(index: number) {  
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <section>
      {/* <Box sx={{ maxWidth: 480, bgcolor: 'background.paper' }}> */}
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
      // aria-label="scrollable auto tabs example"
      >
        <Tab label="Certificados"{...a11yProps(0)} onClick={()=> setActive(0)} className={active === 0?"active":"tabLayout"} />
        <Tab label="Conhecimentos"{...a11yProps(1)}onClick={()=> setActive(1)} className={active === 1?"active":"tabLayout"} />
        <Tab label="Repositórios"{...a11yProps(2)} onClick={()=> setActive(2)} className={active === 2?"active":"tabLayout"} />
      </Tabs>
      {/* </Box> */}

      <main>
        <TabPanel value={value} index={0}>
          <ContentTab1 />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ContentTab2 />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ContentTab3 />
        </TabPanel>
      </main>
    </section>
  );
}
