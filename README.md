# overages

The scope of this application is to query goverment API's in order to find money owed to individuals or companies. it will create a database of overages, contact information for who is owed the money or their next of kin of they are deceased.

This application will also serve as data collection that streamlines the documentation process for the county and state to allow for same day filing of the overages.

data flow: 
server pulls on an intervul from thirdparty API's to collect data.
Data is translated into the format of the tables and stored in our local database.
users call the local server database for query requests.