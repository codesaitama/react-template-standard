import React from 'react';
import PageTitle from "components/common/PageTitle";
import { 
    SimpleBlog,
    SliderBlog,
    HorizontalBlog,
    ActionWidget
} from "components/widgets/blogwigets";
import {
    cover1,
    cover2,
    cover3,
    cover5,
    cover6,
    cover7,
    cover8,
    cover9,
    brownShoe, 
    speaker
} from "helper/constant";

const BlogWidgets = () => {
    return (
        <div>
            <PageTitle
                title="sidebar.blogwidgets"
                className="plr-15"
                breadCrumb={[
                    {
                        name: "sidebar.widgets"
                    },
                    {
                        name: "sidebar.blogwidgets"
                    }
                ]}
            />
            <div className="row mlr-0" style={{marginTop: '-15px'}}>
                <div className="col-xl-6 ptb-15">
                    <SimpleBlog
                        banner={cover5}
                        title={"Travel Blog"}
                        created={"Jan 25 2019"}
                        info={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                        like={39}
                        comment={29}
                    />
                </div>

                <div className="col-xl-6 ptb-15">
                    <SimpleBlog
                        banner={cover6}
                        title={"Online Blog"}
                        created={"Jan 21 2019"}
                        info={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                        like={"4k"}
                        comment={"1k"}
                    />
                </div>

                <div className="col-xl-12 ptb-15">
                    <HorizontalBlog
                        banner={cover6}
                        title={"Horizontal Blog"}
                        created={"Jan 21 2019"}
                        info={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                        like={"4k"}
                        comment={"1k"}
                    />
                </div>

                <div className="col-xl-6 ptb-15">
                    <SliderBlog
                        banners={[cover7, cover8, cover9]}
                        title={"Slider Blog"}
                        created={"Jan 21 2019"}
                        info={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                        like={"4k"}
                        comment={"1k"}
                    />
                </div>

                <div className="col-xl-6 ptb-15">
                    <SliderBlog
                        banners={[cover2, cover3, cover1]}
                        title={"Slide Show"}
                        created={"Jan 21 2019"}
                        info={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                        like={"4k"}
                        comment={"1k"}
                    />
                </div>

                <div className="col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 ptb-15">
                        <ActionWidget
                            cardMedia={brownShoe}
                            cardTitle="Walter Steiger"
                            mediaHeadline="Walter Steiger"
                            cardDiscription="Mollit excepteur amet nostrud ut occaecat irure dolore ut enim sunt."
                        />
                    </div>

                    <div className="col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 ptb-15">
                        <ActionWidget
                            cardMedia={speaker}
                            cardTitle="JBL Clip"
                            mediaHeadline="JBL Clip"
                            cardDiscription="Mollit excepteur amet nostrud ut occaecat irure dolore ut enim sunt."
                        />
                    </div>
            </div>
        </div>
    );
};

export default BlogWidgets;