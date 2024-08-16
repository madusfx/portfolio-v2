import React from 'react';
import {
  faBuilding,
  faCalendar,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function ExperienceCard({ title, company, location, time, duration }) {
  return (
    <div className="mt-12 flex justify-between">
      <div>
        <p className="text-xl text-customGray dark:text-white">{title}</p>
        <div className="flex gap-6">
          <div className="mt-4 flex gap-1">
            <FontAwesomeIcon
              icon={faBuilding}
              className="h-4 w-4 text-customGray dark:text-white"
            />
            <p className="text-xs text-customGray dark:text-white font-medium">
              {company}
            </p>
          </div>
          <div className="mt-4 flex gap-1">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="h-4 w-4 text-customGray dark:text-white"
            />
            <p className="text-xs text-customGray dark:text-white font-medium">
              {location}
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className="bg-customPurple rounded-md p-2 inline-flex text-white">
          {time}
        </p>
        <div className="mt-4 flex items-center gap-1">
          <FontAwesomeIcon
            icon={faCalendar}
            className="h-4 w-4 text-customGray dark:text-white"
          />
          <p className="text-xs text-customGray dark:text-white font-medium">
            {duration}
          </p>
        </div>
      </div>
    </div>
  );
}
