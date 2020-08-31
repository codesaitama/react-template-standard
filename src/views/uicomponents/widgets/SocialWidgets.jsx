import React from 'react';
import PageTitle from "components/common/PageTitle";
import {
    SocialProfileInfo,
    FollowingProfile,
    SimpleIntro,
    SocialMediaWidget,
    SocialQuoteWidget,
    SocialSemiLayoutWidget
} from 'components/widgets/socialwidgets/index';
import {
    people2,
    people3,
    people4,
    people5,
    people6,
    people7,
    people8,
    people9,
    people10,
    people11,
    people12,
    people13,
    // people14,
    // people15,
    cover1,
    cover2,
    cover3,
    cover4,
    cover5,
    cover6,
    // cover7,
    // cover8,
} from "helper/constant";

const SocialWidgets = () => {
    return (
        <div>
            <PageTitle
                title="sidebar.socialwidgets"
                className="plr-15"
                breadCrumb={[
                    {
                        name: "sidebar.widgets"
                    },
                    {
                        name: "sidebar.socialwidgets"
                    }
                ]}
            />
            <div>
                <div className="row mlr-0" style={{marginTop: '-15px'}}>
                    <div className="col-xl-4 ptb-15">
                        <SocialProfileInfo
                            profile={people2}
                            name={'Emma Stone'}
                            position={'UI/UX Designer'}
                            info={'Pharetra diam sit amet nisl suscipit adipiscing. Nulla pellentesque dignissim enim sit.'}
                        />
                    </div>
                    <div className="col-xl-4 ptb-15">
                        <SocialProfileInfo
                            profile={people3}
                            name={'Megan Fox'}
                            position={'UI/UX Designer'}
                            info={'Pharetra diam sit amet nisl suscipit adipiscing. Nulla pellentesque dignissim enim sit.'}
                        />
                    </div>
                    <div className="col-xl-4 ptb-15">
                        <SocialProfileInfo
                            profile={people4}
                            name={'Natalie Portman'}
                            position={'Fashion Designer'}
                            info={'Pharetra diam sit amet nisl suscipit adipiscing. Nulla pellentesque dignissim enim sit.'}
                        />
                    </div>
                    <div className="col-xl-4 ptb-15">
                        <FollowingProfile
                            profile={people5}
                            name={'James Bond'}
                            position={'Student'}
                            banner={cover1}
                        />
                    </div>
                    <div className="col-xl-4 ptb-15">
                        <FollowingProfile
                            profile={people6}
                            name={'Janny Carton'}
                            position={'QA'}
                            banner={cover2}
                        />
                    </div>
                    <div className="col-xl-4 ptb-15">
                        <FollowingProfile
                            profile={people7}
                            name={'Jesica Walk'}
                            position={'Actor'}
                            banner={cover3}
                        />
                    </div>
                    <div className="col-xl-4 ptb-15">
                        <SimpleIntro
                            email={'jennifer@gmail.com'}
                            profile={people8}
                            name={'Jennifer Lawrence'}
                            position={'Loyer'}
                        />
                    </div>
                    <div className="col-xl-4 ptb-15">
                        <SimpleIntro
                            email={'margot@yahoo.in'}
                            profile={people9}
                            name={'Margot Robbie'}
                            position={'Engineer'}
                        />
                    </div>
                    <div className="col-xl-4 ptb-15">
                        <SimpleIntro
                            email={'galgadot@gmail.com'}
                            profile={people10}
                            name={'Gal Gadot'}
                            position={'Actress'}
                        />
                    </div>

                    <div className="col-12 col-xl-3 col-lg-6 col-md-6 col-sm-6 ptb-15">
                        <SocialMediaWidget
                            iconName="fab fa-google-plus-g"
                            iconColor="#f44336"
                            headline="150+"
                            dark
                            subheader="Connections"
                        />
                    </div>

                    <div className="col-12 col-xl-3 col-lg-6 col-md-6 col-sm-6 ptb-15">
                        <SocialMediaWidget
                            iconName="fab fa-facebook-f"
                            iconColor="#3f51b5"
                            headline="100+"
                            dark
                            subheader="Likes"
                        />
                    </div>

                    <div className="col-12 col-xl-3 col-lg-6 col-md-6 col-sm-6 ptb-15">
                        <SocialMediaWidget
                            iconName="fab fa-instagram"
                            iconColor="#9c27b0"
                            headline="50+"
                            dark
                            subheader="Shots"
                        />
                    </div>

                    <div className="col-12 col-xl-3 col-lg-6 col-md-6 col-sm-6 ptb-15">
                        <SocialMediaWidget
                            iconName="fab fa-twitter"
                            iconColor="#03a9f4"
                            headline="350+"
                            dark
                            subheader="Followers"
                        />
                    </div>
                    <div className="col-xl-4 ptb-15">
                        <SocialQuoteWidget
                            profile={people11}
                            name={'Jenny Lorwence'}
                            position={'Software Developer'}
                            banner={cover4}
                            info={"Lorem Ipsum is simply dummy text"}
                            like={20}
                            quote={"Nobody is perfect, but life is about choices."}
                        />
                    </div>
                    <div className="col-xl-4 ptb-15">
                        <SocialQuoteWidget
                            profile={people12}
                            name={'carlet hooks'}
                            position={'Banking'}
                            banner={cover5}
                            info={"Lorem Ipsum is simply dummy text"}
                            like={40}
                            quote={"Nobody is perfect, but life is about choices."}
                        />
                    </div>
                    <div className="col-xl-4 ptb-15">
                        <SocialQuoteWidget
                            profile={people13}
                            name={'Task Bucks'}
                            position={'QA'}
                            banner={cover6}
                            info={"Lorem Ipsum is simply dummy text"}
                            like={25}
                            quote={"Nobody is perfect, but life is about choices."}
                        />
                    </div>
                    <div className="col-12 col-xl-3 col-lg-6 col-md-6 col-sm-6 ptb-15">
                        <SocialSemiLayoutWidget
                            avatar={
                                "http://preview-vuse.hexesis.com/static/doc-images/lists/men1.png"
                            }
                            className="demo"
                            dark
                            background="#424242"
                            name="Alice Blue"
                            detail="Lorem ipsum sint enim sunt dolore dolore consectetur pariatur"
                        />
                    </div>
                    <div className="col-12 col-xl-3 col-lg-6 col-md-6 col-sm-6 ptb-15">
                        <SocialSemiLayoutWidget
                            avatar={
                                "http://preview-vuse.hexesis.com/static/doc-images/lists/men1.png"
                            }
                            background="white"
                            icon={true}
                            iconClass="fas fa-heart"
                            iconColor="white"
                            iconBackground="#e91e63"
                            className="demo"
                            name="Alice Blue"
                            detail="Lorem ipsum sint enim sunt dolore dolore consectetur pariatur"
                        />
                    </div>
                    <div className="col-12 col-xl-3 col-lg-6 col-md-6 col-sm-6 ptb-15">
                        <SocialSemiLayoutWidget
                            background="#424242"
                            icon={true}
                            iconClass="fas fa-user-alt"
                            iconColor="black"
                            iconBackground="white"
                            dark
                            className="demo"
                            name="Alice Blue"
                            detail="Lorem ipsum sint enim sunt dolore dolore consectetur pariatur"
                        />
                    </div>
                    <div className="col-12 col-xl-3 col-lg-6 col-md-6 col-sm-6 ptb-15">
                        <SocialSemiLayoutWidget
                            avatar={
                                "http://preview-vuse.hexesis.com/static/doc-images/lists/men1.png"
                            }
                            className="demo"
                            dark
                            background="#424242"
                            name="Alice Blue"
                            detail="Lorem ipsum sint enim sunt dolore dolore consectetur pariatur"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialWidgets;