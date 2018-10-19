
-- photo 1 = matheson bridge
INSERT INTO photos (user_id, marker_id, photo_url, city, date, time)
VALUES (1,1,'./uploads/mathesonbridge.jpg','CHARLOTTE', '2018-01-01', '17:00:00');

-- user 1 = 
INSERT INTO users (user_name, user_fname, user_lname, bio)
VALUES ('shutterbug1', 'Dirk', 'Torres', 'live, laugh, love');

-- marker 1 = matheson bridge @35.2462189,-80.8134568
INSERT INTO markers (name, address, lat, lng, type)
VALUES ('Matheson Bridge', 'Matheson Ave, Charlotte, NC', 35.2462189, -80.8134568, 'Photo-Op');
