import {useEffect} from 'react';
import {Stats} from 'metrics';

const StatsPage = () => {
  useEffect(() => {
    document.title = "Performance stats";

    fetchStats();

    async function fetchStats() {
      const stats = new Stats({counterId: '25b6fb6d-fab1-457a-9297-99f01407c63f'});
      await stats.fetchData();

      stats.showMetricsByDate('app', '2021-10-31');
      stats.showMetricByPeriod('app', '2021-10-30', '2021-11-1');
      stats.showMetricBySession('app', '226415150422');
      stats.compareMetric('app', 'LCP', 'browser');
      stats.compareMetric('app', 'FID', 'os');
    }
  }, []);

  return null;
};

export default StatsPage;