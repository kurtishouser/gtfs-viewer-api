# GTFS Viewer API

GTFS Viewer API is the backend Node application used by [GTFS Viewer](https://github.com/kurtishouser/gtfs-viewer). PostgreSQL is used to store the GTFS data. The complete dataset for the San Francisco Muni is included in this repo at ```db/seeds/gtfs-files```. I still need to write the code that will seed the database with these CSV files so until then this will need to be done manually using the PostgreSQL ```COPY``` command.
