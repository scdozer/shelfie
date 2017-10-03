CREATE TABLE Shelfie_shelf (
    ShelfID varchar(255) PRIMARY KEY NOT NULL,
    ShelfNM varchar(255) NOT NULL
);

CREATE TABLE Shelfie_bin (
    BinID SERIAL PRIMARY KEY NOT NULL,
    BinNM varchar(255) NOT NULL,
    PositionNBR INTEGER NOT NULL,
    PriceAMT DECIMAL(38,2) NULL,
    ShelfID varchar(255) NOT NULL
);

INSERT INTO Shelfie_bin
(BinNM, PositionNBR, PriceAMT, ShelfID)
VALUES ('Bin 2', 2, 10, 'A')
