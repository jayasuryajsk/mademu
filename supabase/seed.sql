-- Seed data for categories
INSERT INTO categories (name, description) VALUES
  ('Construction Equipment', 'Heavy machinery and tools for construction projects'),
  ('Power Tools', 'Electric and battery-powered tools'),
  ('Event Equipment', 'Equipment for events, parties, and gatherings'),
  ('Garden & Landscaping', 'Tools and machinery for gardening and landscaping'),
  ('Cleaning Equipment', 'Industrial and commercial cleaning equipment'),
  ('Moving & Transport', 'Equipment for moving and transportation');

-- Sample equipment data
INSERT INTO equipment (
  category_id,
  name,
  description,
  daily_rate,
  weekly_rate,
  monthly_rate,
  total_quantity,
  available_quantity,
  specifications,
  status
) VALUES
  (
    (SELECT id FROM categories WHERE name = 'Construction Equipment'),
    'Mini Excavator 3.5T',
    'Compact excavator perfect for small to medium construction projects',
    250.00,
    1500.00,
    4500.00,
    3,
    3,
    '{"weight": "3500kg", "bucket_capacity": "0.12m³", "max_dig_depth": "3.5m"}',
    'active'
  ),
  (
    (SELECT id FROM categories WHERE name = 'Power Tools'),
    'Concrete Mixer 120L',
    'Portable concrete mixer with 120L drum capacity',
    75.00,
    400.00,
    1200.00,
    5,
    5,
    '{"capacity": "120L", "power": "550W", "weight": "45kg"}',
    'active'
  ),
  (
    (SELECT id FROM categories WHERE name = 'Event Equipment'),
    'PA System 1000W',
    'Professional PA system suitable for events up to 200 people',
    150.00,
    800.00,
    2400.00,
    4,
    4,
    '{"power": "1000W", "speakers": "2x 12-inch", "wireless_mic": "included"}',
    'active'
  ),
  (
    (SELECT id FROM categories WHERE name = 'Garden & Landscaping'),
    'Ride-on Mower',
    'Commercial grade ride-on mower for large areas',
    120.00,
    650.00,
    1950.00,
    2,
    2,
    '{"cutting_width": "42 inch", "engine": "22HP", "fuel_type": "petrol"}',
    'active'
  );