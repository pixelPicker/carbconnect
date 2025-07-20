CREATE TABLE IF NOT EXISTS carbon_logs (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL,
    category VARCHAR(50) NOT NULL CHECK (
        category IN (
            'transport',
            'energy',
            'food',
            'waste',
            'water',
            'shopping',
            'dailyActivities'
        )
    ),
    quantity REAL NOT NULL CHECK (quantity >= 0), -- e.g., km, kWh, kg, etc.
    emission_factor REAL NOT NULL, -- snapshot of the factor at time of logging
    emission_total REAL GENERATED ALWAYS AS (quantity * emission_factor) STORED,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Optional: index for fast user queries
CREATE INDEX IF NOT EXISTS idx_user_id ON carbon_logs(user_id);
