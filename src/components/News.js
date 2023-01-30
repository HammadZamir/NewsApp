import React, { useEffect , useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './loader'
import './top.css';
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props)=> {

  const funcc = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1) ;
  }

  const [articles , setArticles] = useState([]); 
  const [loading , setLoading] = useState(true); 
  const [page , setPage] = useState(1); 
  const [totalResults , setTotalResults] = useState(0); 
    
  document.title = `${funcc(props.category)}-NewsMonkey`
  

  const updateFunc= async () => {
    // const URL = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c923e045475b4f3b844ebec77ebfa085&page=${this.state.page}&pageSize=${props.pageSize}`;
    // this.setState({loading : true})
    // let Data = await fetch(URL);
    // let data = await Data.json();
    // // console.log(data)
    // this.setState({
    //   articles : data.articles, 
    //   totalResults : data.totalResults,
    //   loading : false
    // })

    props.setProgress(10);
    const URL = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let Data = await fetch(URL);
    props.setProgress(40);
    let data = await Data.json();
    props.setProgress(70);
    // console.log(data)
    setArticles(data.articles);
    setTotalResults(data.totalResults)
    setLoading(false)
    
    // console.log(this.state.totalResults)
    props.setProgress(100); 

  }

  useEffect(()=>{

    updateFunc();

  },[])


  // prevButton = async ()=>{
  //   // let URL = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=53d523f3806a4969a0b23f55af47a22c&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
  //   // this.setState({loading : true})
  //   // let Data = await fetch(URL);
  //   // let data = await Data.json();
  //   // this.setState({articles : data.articles})
  //   // this.setState({
  //   //   page : this.state.page - 1,
  //   //   loading : false
  //   // })
  //   this.setState({page:this.state.page-1});
  //   this.updateFunc();
  // }

  // nextButton = async ()=>{
  //   // if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize))){
  //   //   // let element = document.querySelector(".btn-next");
  //   //   // element.setAttribute("disabled" , true)
  //   //   let URL = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=53d523f3806a4969a0b23f55af47a22c&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
  //   //   this.setState({loading : true})
  //   //   let Data = await fetch(URL);
  //   //   let data = await Data.json();
  //   //   this.setState({articles : data.articles})
  //   //   this.setState({
  //   //     page : this.state.page + 1,
  //   //     loading : false
  //   //   })
  //   // }
  //   this.setState({page:this.state.page+1});
  //   this.updateFunc();
  // }

  const scrollToTop = ()=> {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  const fetchMoreData = async () => {
    // console.log(this.state.page)

    const URL = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1);
    setLoading(true)
    let Data = await fetch(URL);
    let data = await Data.json();
    // console.log(data)
    setArticles(articles.concat(data.articles));
    setTotalResults(data.totalResults);
    setLoading(false);
    
  };

  

  
    return (
      <>
        <h2 className=' text-center' style={{margin: "90px 0 30px 0"}}>NewsMonkey - {props.title} Section</h2>
        
          {loading && <Spinner/>}    
        
        <InfiniteScroll  dataLength={articles.length} next={fetchMoreData} hasMore={articles.length !== totalResults } loader={<Spinner/>}>

          <div className="container">

          <div className="row" >
          {articles.map((article)=>{
            return <div className="col-md-4" key={article.url}>
              <NewsItem date={article.publishedAt} source={article.source.name} author={article.author} title={article.title} description={article.description} imageUrl={article.urlToImage? article.urlToImage : "https://image.cnbcfm.com/api/v1/image/106953086-1633521225750-gettyimages-1345032340-dscf7597_2021100575916570.jpeg?v=1673002801&w=1920&h=1080"} newsUrl={article.url}/>
              </div>
            })}   
          </div>
          </div>

        </InfiniteScroll>

        {/* <div className='d-flex justify-content-between my-5'>
          <button disabled={this.state.page<=1} className="btn btn-primary btn-sm" onClick={this.prevButton} >&larr; Prev</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize)} className="btn btn-next btn-primary btn-sm" onClick={this.nextButton} >Next &rarr;</button>
        </div> */}
        <button className="btn btn-danger btn-sm top" onClick={scrollToTop} >Top &uarr;</button>

      </>
    )
  
}

export default News