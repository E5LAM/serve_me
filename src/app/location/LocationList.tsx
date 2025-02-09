"use client";
import Link from "next/link";
import { ListGroup, Stack } from "react-bootstrap";

type Location = {
  name: string;
  towns: { name: string }[];
};

export const LocationList = ({ locations }: { locations?: Location[] }) => {
  return (
    <ListGroup className="location-container">
      {locations?.map((loc) => (
        <div key={loc.name} className="location-card">
          <ListGroup.Item className="location-item child-item">
            <Link
              href={`/${loc.name}`}
              className="text-decoration-none text-dark location-link d-block w-100"
            >
              {loc.name}
            </Link>
          </ListGroup.Item>

          {loc.towns.length > 0 && (
            <ListGroup className="nested-list depth-1">
              {loc.towns.map((town) => (
                <Stack key={town.name}>
                  <ListGroup.Item className="location-item child-item">
                    <Link
                      href={`/${town.name}`}
                      className="text-decoration-none text-dark location-link d-block w-100"
                    >
                      {town.name}
                    </Link>
                  </ListGroup.Item>
                </Stack>
              ))}
            </ListGroup>
          )}
        </div>
      ))}
    </ListGroup>
  );
};
