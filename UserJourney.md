|- if logged in
    |- if admin
        |- show **Admin_Panel**
    |- if client
        |- show **Home_page**
|- if not logged in
        |- if client
            |- no credentials. action: *register*
                        redirect to **registration_form**
                            |- Register and show register info action: *ok*
                                |- redirect to **login_form**
            |- Log in
                |- if client
                    |- show **Home_page**. action: *Book*
                        |- if client logged in
                            |- show **booking_form**. action: *submit*
                                |- show filled out information. action: *OK*
                                    |- Ok redirects to **Home_page**
        |- if admin
            |- Enter admin url
                |- if logged in
                    |- Show **admin_panel**
                        |- Book
                            |- show **booking_form**
                                |- show filled out information. action: *OK*
                                    |- Ok redirects to **admin_panel**
                        |- Add Driver
                            |- show **add_driver_form**
                                |- show filled out information action: *Ok*
                                    |- Ok redirects to **admin_panel**
                        |- Add Car
                            |- show **add_car_form**
                                |- show filled out information action: *Ok*
                                    |- Ok redirects to **admin_panel**
                        |- View User
                            |- show **all_users**
                                |- edit user
                                    |- show filled out information action: *Ok*
                                        |- Ok redirects to **admin_panel**
                                |- delete user action: *delete*
                                    |- Delete redirects to **admin_panel**
                        |- View Bookings
                            |- show **all_bookings**
                                |- show booking details action: *edit*
                                    |- Edit Booking
                                        |- show **edit_booking_form** action: *submit*
                                            |- show filled out information action: *Ok*
                                                |- Ok redirects to **admin_panel**
                |- if not logged in
                    | Show **login_form**
                        |- Enter Credentials action: *submit*
                            |- Redirect to **admin_panel**