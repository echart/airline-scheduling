import AircraftCardList from '../Aircraft/AircraftCardList';
import Container from '../Container';
import Timeline from '../Rotation/Timeline';
import RotationList from '../Rotation/RotationList';
import Datepicker from '../Datepicker';

import useScheduler from '../../hooks/useScheduler';
import { FlightList } from '../Flight/FlightList/FlightList';

export const Scheduler = () => {
  const scheduler = useScheduler();
  const { aircrafts, flights, rotation, actions } = scheduler;

  return (
    <section className="scheduler layout">
      <Container className="column-4" title="Aircrafts" hasPadding={false}>
        <AircraftCardList
          aircrafts={aircrafts.data}
          active={aircrafts.active}
          onSelect={actions.onSelectAircraft}
          rotation={rotation}
        />
      </Container>
      <Container
        className="column-8"
        hasPadding
        title={`Rotation ${aircrafts.active || ``}`}
      >
        <Datepicker onChangeDate={actions.onChangeDate} />
        <RotationList flights={rotation} onSelect={actions.onRemoveRotation} />
        <Timeline items={rotation} />
      </Container>
      <Container
        className="column-4"
        title="Available Flights"
        hasPadding={flights.loading}
      >
        <FlightList
          flights={flights.data || []}
          rotation={rotation}
          onAddRotation={actions.onAddRotation}
          loading={flights.loading}
        />
      </Container>
    </section>
  );
};
