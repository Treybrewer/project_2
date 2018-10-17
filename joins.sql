-- pull all photos for a user
SELECT p.photo_id, p.marker_id, p.photo_url, p.city, p.date, p.time
FROM Photos as p
join users u ON u.user_id = p.user_id
where u.user_id = 1;
-- pull all photos for a city
SELECT * FROM PHOTOS
WHERE CITY = 'CHARLOTTE';
-- pull all photos for a marker
SELECT *
FROM photos p
join markers m on m.id = p.marker_id
where m.id = 1;
-- pull user info for a photo
SELECT u.user_id, u.user_name, u.user_fname, u.user_lname, u.bio
FROM users u
join photos p on u.user_id = p.user_id
where p.photo_id = 2;