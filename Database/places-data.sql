CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

INSERT INTO place (place_id, place_name, place_area, place_type, place_image) 
    VALUES (uuid_generate_v4(),'Byblos Sur Mer','Byblos' ,'Hotel', '/place-images/byblos-sur-mer.jpg');

INSERT INTO place (place_id, place_name, place_area, place_type, place_image) 
    VALUES (uuid_generate_v4(),'Movenpick','Beirut' ,'Hotel', '/place-images/movenpick.jpg');

INSERT INTO place (place_id, place_name, place_area, place_type, place_image) 
    VALUES (uuid_generate_v4(),'Lancaster Plaza','Beirut' ,'Hotel', '/place-images/lancaster-plaza.jpg');

INSERT INTO place (place_id, place_name, place_area, place_type, place_image) 
    VALUES (uuid_generate_v4(),'Imara','Jdeideh' ,'Restaurant', '/place-images/imara.jpg');

INSERT INTO place (place_id, place_name, place_area, place_type, place_image) 
    VALUES (uuid_generate_v4(),'Music Hall','Beirut' ,'Night Club', '/place-images/music-hall.jpg');
    
